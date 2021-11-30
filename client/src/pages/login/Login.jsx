import { useContext, useRef, useState } from 'react';
import classes from './Login.module.scss';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(false);
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN_START'});
    console.log('Processing request...');
    try {
      const res = await axios.post('/auth/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      res.data && window.location.replace('/');
      console.log('It worked!');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
      setError(true);
      window.location.replace('/register');
      console.log('Something went wrong!');
    }
  }

  return (
    <div className={classes.login}>
      <h1 className={classes.login__title}>Login</h1>
      <form 
        className={classes.login__form}
        onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='email'
          ref={emailRef} 
        />
        <input 
          type='password'
          placeholder='password'
          ref={passwordRef}
        />
        <button 
          className={classes.login__form__login}
          type='submit'
          disabled={isFetching}>
          Login
        </button>
      </form>
      {error && <p className={classes.login__error}>
        Wrong password or email
      </p>}
      <p>Don't have an account?</p>
      <Link 
        to='/register' 
        className={classes.login__form__register}>
        Register
      </Link>
    </div>
  )
}
