import React from 'react'
import classes from './IncExpLedger.module.scss';

export default function IncExpLedger() {
  return (
    <div className={classes.incExp}>
      <div className={classes.incExp__inc}>
        <h3>Income</h3>
        <p className={classes.incExp__inc__pos}>+$0.00</p>
      </div>
      <div className={classes.incExp__exp}>
        <h3>Expenses</h3>
        <p className={classes.incExp__exp__neg}>-$0.00</p>
      </div>
    </div>
  )
}
