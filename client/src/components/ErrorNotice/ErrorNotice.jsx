import classes from './ErrorNotice.module.scss';

export default function ErrorNotice(props) {
  return (
    <div className={classes.error}>
      <span>{props.message}</span>
      <button onClick={props.clearError}>OK</button>
    </div>
  )
}
