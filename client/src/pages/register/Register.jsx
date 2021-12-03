import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Context from '../../context/Context';
// import ErrorNotice from '../../components/ErrorNotice/ErrorNotice';
import classes from './Register.module.scss';

export default function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();

  const { setUserCredentials } = useContext(Context);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{

      const newUser = { username, email, password, passwordCheck };

      await axios.post
        (
          'http://localhost:5000/api/auth/register', 
          newUser
        );

      const res = await axios.post
      (
        "http://localhost:5000/api/auth/login", 
        {
          email,  
          password
        }
      );

      setUserCredentials({

        token: res.data.token,
        user: res.data.user,

      });

      localStorage.setItem('auth-token', res.data.token);
      navigate('/');

    } catch (err) {
      setError(err);
    } finally {
      navigate('/login');
    }
  };

  return (
    <div className={classes.register}>
      <h1 className={classes.register__title}>Register</h1>
      <form 
        className={classes.register__form}
        onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='username'
          onChange={e => setUsername(e.target.value)}
        />
        <input 
          type='email'
          placeholder='email'
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type='password'
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
        />
        <input 
          type='password'
          placeholder='confirm password'
          onChange={e => setPasswordCheck(e.target.value)}
        />
        <button 
          className={classes.register__form__register}
          type='submit'>
          Register
        </button>
      </form>
      {error && <p className={classes.register__error}>
        Account exists for this email
      </p>}
      <p>Already have an account?</p>
      <Link to='/login' className={classes.register__form__login}>Login</Link>
    </div>
  )
}