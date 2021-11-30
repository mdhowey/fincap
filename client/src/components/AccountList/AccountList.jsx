import { useContext } from 'react';
import { AcctContext } from '../../context/acctContext/acctContext';
import Account from '../Account/Account';
import classes from './AccountList.module.scss';

export default function AccountList({ account }) {
  const { accounts } = useContext(AcctContext);

  return (
    <div className={classes.acctList}>
      <AcctContext.Provider>
        <h4 className={classes.acctList__head}>Accounts</h4>
        <ul className={classes.acctList__list}>
          {accounts.map(account => (<Account key={account._id} account={account} />))}
        </ul>
      </AcctContext.Provider>
    </div>
  )
}
