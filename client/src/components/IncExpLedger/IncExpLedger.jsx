import classes from './IncExpLedger.module.scss';

export default function IncExpLedger() {

  // I want to show the total amount of income
  // and the total amount of expense depending
  // on type --> if income + income 
  // if expense + expense

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
