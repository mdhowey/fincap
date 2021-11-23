import React from 'react';
import classes from './Balance.module.scss';

export default function Balance() {
  return (
    <div className={classes.balance}>
      <div className={classes.balance__acct}>
        <h4 className={classes.balance__acct__head}>Account</h4>
        <h4 className={classes.balance__acct__head}>Balance</h4>
      </div>
      <div className={classes.balance__acct}>
        <h4 className={classes.balance__acct__title}>Savings</h4>
        <h4 className={classes.balance__acct__bal}>$0.00</h4>
      </div>
      <div className={classes.balance__acct}>
        <h4 className={classes.balance__acct__title}>Savings</h4>
        <h4 className={classes.balance__acct__bal}>$0.00</h4>
      </div>
      <div className={classes.balance__acct}>
        <h4 className={classes.balance__acct__title}>Savings</h4>
        <h4 className={classes.balance__acct__bal}>$0.00</h4>
      </div>
    </div>
  )
}
