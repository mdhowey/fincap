import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Login.module.scss';
import Context from '../../context/Context';
import axios from 'axios';
import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';

export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const { setUserCredentials } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };

      const res = await axios.post
        (
          "http://localhost:5000/api/auth/login", 
          user
        );

        setUserCredentials({

          token: res.data.token,
          user: res.data.user,

        });

        localStorage.setItem('auth.token', res.data.token);

    } catch (err) {

      console.log(err);

    } finally {
      navigate('/');
    }
  };

  return (
    <div className={classes.login}>
      <h1 className={classes.login__title}>Login</h1>
      <form 
        className={classes.login__form}
        onSubmit={handleSubmit}>
        {error && 
          <ErrorNotice 
            message={error} 
            clearError={() => setError(undefined)} 
          />
        }
        <input 
          type='text'
          placeholder='email'
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type='password'
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
        />
        <button 
          className={classes.login__form__login}
          type='submit'
          >
          Login
        </button>
      </form>
      <p>Don't have an account?</p>
      <Link 
        to='/register' 
        className={classes.login__form__register}>
        Register
      </Link>
    </div>
  )
}
