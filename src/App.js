import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/Lists";
import Single from './pages/single/Single';
import New from './pages/new/New';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path='login' element={<Login />} />
            <Route path='users' element={<List />}>
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
            <Route path='products' element={<List />}>
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
