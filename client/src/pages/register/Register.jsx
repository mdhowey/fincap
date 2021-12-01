import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './Register.module.scss';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    if (email === '' || password === '') {
      setError([true, 'All fields required.']);
      return;
    }
    try{
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      console.log(res)
      window.location.replace('/login');
    } catch (err) {
      setError(true);
      console.log(err.message);
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