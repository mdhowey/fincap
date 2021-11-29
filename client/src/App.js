import Home from "./pages/home/Home";
import { useContext } from 'react';
import { Context } from './context/Context';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
