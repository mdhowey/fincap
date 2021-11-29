import classes from './Login.module.scss';

export default function Login() {
  return (
    <div className={classes.login}>
      <h1 className={classes.login__title}>Login</h1>
      <form className={classes.login__form}>
        <input placeholder='email'/>
        <input placeholder='password'/>
        <button className={classes.login__form__login}>Login</button>
      </form>
      <button className={classes.login__form__register}>Register</button>
    </div>
  )
}
