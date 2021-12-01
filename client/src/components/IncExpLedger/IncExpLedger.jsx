import classes from './IncExpLedger.module.scss';

export default function IncExpLedger() {
  return (
    <div className={classes.incExp}>
      <div className={classes.incExp__item}>
        <h3>Income</h3>
        <h4 className={classes.incExp__item__pos}>Hard Coded</h4>
      </div>
      <div className={classes.incExp__item}>
        <h3>Expenses</h3>
        <h4 className={classes.incExp__item__neg}>Hard Coded</h4>
      </div>
    </div>
  )
}
