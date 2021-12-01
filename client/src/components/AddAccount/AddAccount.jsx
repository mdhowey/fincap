import { useState, useContext } from 'react';
import classes from './AddAccount.module.scss';
import { Context } from '../../context/Context';

export default function AddAccount() {
  const { user } = useContext(Context);

  const [acctName, setAcctName] = useState('');
  const [currency, setCurrency] = useState('');
  const [balance, setBalance] = useState('');
  const [owner, setOwner] = useState(user._id);

  return (
    <div className={classes.addAcct}>
      <h4 className={classes.addAcct__head}>New Account</h4>
      <form className={classes.addAcct__form}>
        <div className={classes.addAcct__form__grp}>
          <input
            className={classes.addAcct__form__grp__item}
            type='text'
            value={acctName}
            onChange={(e) => setAcctName(e.target.value)}
            placeholder='Account Name'
          />
          <input
            className={classes.addAcct__form__grp__item}
            type='text'
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            placeholder='Currency'
          />
        </div>
        <div className={classes.addAcct__form__grp}>
          <input
            className={classes.addAcct__form__grp__item}
            type='number'
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder='Balance'
          />
        </div>
        <div className={classes.addAcct__form__btncont}>
          <button className={classes.addAcct__form__btncont__submit}></button>
        </div>
      </form>
    </div>
  )
}
