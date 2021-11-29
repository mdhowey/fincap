import classes from './Register.module.scss';

export default function Login() {
  return (
    <div className={classes.register}>
      <h1 className={classes.register__title}>Register</h1>
      <form className={classes.register__form}>
        <input placeholder='email'/>
        <input placeholder='password'/>
        <button className={classes.register__form__register}>Register</button>
      </form>
      <p>Already have an account?</p>
      <button className={classes.register__form__login}>Login</button>
    </div>
  )
}