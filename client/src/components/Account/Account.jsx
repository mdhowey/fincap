import classes from './Account.module.scss';

export default function Account({ account }) {
  console.log(account);
  return (
    <li className={classes.acct}>
      <p className={classes.acct__acctName}>{account.acctName}</p>
      <p className={classes.acct__balance}>${account.balance.toFixed(2)}</p>
    </li>
  )
}
