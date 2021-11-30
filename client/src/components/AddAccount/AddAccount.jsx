import { useState, useContext } from 'react';
import classes from './AddAccount.module.scss';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function AddAccount() {
  const [acctName, setAcctName] = useState('');
  const [currency, setCurrency] = useState('');
  const [balance, setBalance] = useState('');
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAcct = {
      acctName,
      currency,
      balance,
      userId: user._id,
    };
    console.log(newAcct);
    try {
      const createdPost = await axios.post('http://localhost:5000/api/account/newAcct', newAcct);
      console.log("Here is createdPost: " + createdPost)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classes.addAcct}>
      <h4 className={classes.addAcct__head}>New Account</h4>
      <form className={classes.addAcct__form} onSubmit={handleSubmit}>
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
