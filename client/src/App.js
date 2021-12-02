import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import axios from 'axios';

import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Context from './context/Context';

function App() {

  const [error, setError] = useState();
  const [userCredentials, setUserCredentials] = useState({

    token: null,
    user: null,

  });

  useEffect(() => {

    const checkLoggedIn = async () => {

      let token = localStorage.getItem('auth-token');

      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }

      const tokenResponse = await axios.post
        (
          'http://localhost:5000/api/auth/tokenIsValid',
          null,
          {
            headers: {
              'x-auth-token': token
            }
          }
        ).catch((error) => {
          console.log(error.toJSON());
        });

      if (tokenResponse) {
        const res = await axios.get
          (
            'http://localhost:5000/api/auth/tokenIsValid',
            {
              headers: {
                'x-auth-token': token
              }
            }).catch((error) => {
              setError(error);
            });

        setUserCredentials({
          token,
          user: res,
        });
      }
    }

    checkLoggedIn();

  }, []);

  return (
    <Router>
      <Context.Provider value={{ userCredentials, setUserCredentials }}>
        <Routes>
          <Route exact path='/' element={userCredentials ? <Home /> : <Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Context.Provider>
    </Router>
  );
}

export default App;
