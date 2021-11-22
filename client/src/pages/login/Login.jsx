import classes from './Login.module.scss';

export default function Login() {
  return (
    <div className={classes.login}>
      <div className={classes.login__title}>Login</div>
      <form className={classes.login__form}>
        <input placeholder='email'/>
        <input placeholder='password'/>
        <button className={classes.login__form__login}>Login</button>
      </form>
      <button className={classes.login__form__register}>Register</button>
    </div>
  )
}
