import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/Lists";
import Single from './pages/single/Single';
import New from './pages/new/New';
import { userInputs, productInputs } from "./formSource";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/dark.scss'
import { DarkModeContext } from "./context/darkModeContext";
import DarkModeContextProvider from "./context/darkModeProvider";

function App() {
  const { darkMode } = useContext(DarkModeContext)
  console.log(darkMode)
  return (
      <div className={darkMode ? 'app dark':'app'} >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users' >
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path='/products'>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
