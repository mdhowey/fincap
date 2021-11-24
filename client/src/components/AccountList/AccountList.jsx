import { useContext } from 'react';
import { Context } from '../../context/Context';
import Account from '../Account/Account';
import classes from './AccountList.module.scss';

export default function AccountList() {
  const { accounts } = useContext(Context);

  return (
    <div className={classes.acctList}>
      <h4 className={classes.acctList__head}>Accounts</h4>
      <ul className={classes.acctList__list}>
        {accounts.map(account => (<Account key={account.id} account={account} />))}
      </ul>
    </div>
  )
}
