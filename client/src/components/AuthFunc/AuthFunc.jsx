import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import Context from '../../context/Context';
import classes from './AuthFunc.module.scss';

export default function AuthFunc() {

  const { userCredentials, setUserCredentials } = useContext(Context);
  const navigate = useNavigate();

  const register = () => navigate('/register');
  const login = () => navigate('/login');
  const logout = () => {
    setUserCredentials({

      token: undefined,
      user: undefined,

    });

    localStorage.setItem('auth-token', '');
    navigate('/login')
  };
  const acctDelete = () => {
    setUserCredentials({

      token: undefined,
      user: undefined,

    });

    localStorage.setItem('auth-token', '');
    navigate('/login')
  };

  return (
    <nav className={classes.authfunc}>
      {userCredentials ? (
        <>
          <button onClick={acctDelete}>Delete Account</button>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={register}>register</button>
          <button onClick={login}>Login</button>
        </>
      )
    }
    </nav>
  )
}
