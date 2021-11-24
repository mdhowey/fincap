import classes from './Account.module.scss';

export default function Account({ account }) {
  console.log(account);
  return (
    <li className={classes.acct}>
      <p className={classes.acct__title}>{account.acctName}</p>
      <p className={classes.acct__balance}>{account.balance}</p>
    </li>
  )
}
