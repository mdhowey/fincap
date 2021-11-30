import classes from './Account.module.scss';
import { Context, AcctContext } from '../../context';
import { useEffect, useState } from 'react';

export default function Account({ account }) {

  return (
    <li className={classes.acct}>
      <p className={classes.acct__acctName}>{account.acctName}</p>
      <p className={classes.acct__balance}>${account.balance.toFixed(2)}</p>
    </li>
  )
}
