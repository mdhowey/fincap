import {useState} from 'react';
import classes from './AddTransaction.module.scss';
import btnAnimation from './_btn_Animation';

export default function AddTransaction() {

  const [title, setTitle] = useState('');
  const [type, setType] = useState([]);
  const [amount, setAmount] = useState([]);
  const [account, setAccount] = useState([]);
  const [planned, setPlanned] = useState(false);
  const [notes, setNotes] = useState('');

  return (
    <div className={classes.addtrans}>
      <h4 className={classes.addtrans__head}>New Transaction</h4>
      <form className={classes.addtrans__form}>
        <div className={classes.addtrans__form__grp}>
          <input 
            className={classes.addtrans__form__grp__item} 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            placeholder='Title'
          />
          {/* DROPDOWN w/ [ENUM types] */}
          <input 
            className={classes.addtrans__form__grp__item} 
            type='text'
            value={type}
            onChange={(e) => setType(e.target.value)}  
            placeholder='Type'
          />
        </div>
        <div className={classes.addtrans__form__grp}>
          <input 
            className={classes.addtrans__form__grp__item} 
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            placeholder='Amount'
          />
          {/* DROPDOWN w/ user ACCOUNTS */}
          <input 
            className={classes.addtrans__form__grp__item} 
            type='text' 
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            placeholder='Account'
          />
        </div>
        <div className={classes.addtrans__form__grp}>
          <textarea 
            className={classes.addtrans__form__grp__item} 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            type='text' 
            placeholder='Notes'
          />
        </div>
        <div className={classes.addtrans__form__switch}>
          <span>Planned?</span>
          <input 
            className={classes.addtrans__form__switch__checkbox1}
            id='planned__toggle' 
            type='checkbox' 
            value={planned}
            onChange={(e) => setPlanned(e.target.value)}
            placeholder='Planned'
          />
          <label htmlFor="planned__toggle"></label>
        </div>
        <div className={classes.addtrans__form__btncont}>
          <button className={classes.addtrans__form__btncont__submit}></button>
        </div>
      </form>
    </div>
  )
}
