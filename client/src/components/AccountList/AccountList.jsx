import classes from './AccountList.module.scss';
import Account from '../Account/Account';

export default function AccountList(props) {
  
  return (
    <div className={classes.acctList}>
      <h4 className={classes.acctList__head}>Accounts</h4>
      <ul className={classes.acctList__list}>
        <Account />
      </ul>
    </div>
  )
}
