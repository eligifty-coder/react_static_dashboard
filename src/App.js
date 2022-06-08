import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/Lists";
import Single from './pages/single/Single';
import New from './pages/new/New';
import { userInputs, productInputs } from "./formSource";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' >
            <Route index element={<List />}/>
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
