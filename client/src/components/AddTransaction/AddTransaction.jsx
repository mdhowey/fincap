import { useState, useRef } from 'react';
import classes from './AddTransaction.module.scss';
import axios from 'axios';


export default function AddTransaction() {

  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [planned, setPlanned] = useState(false);
  const [notes, setNotes] = useState('');

  // How do you I get new transactions into TransactionList????

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post
      (
        'http://localhost/5000/api/transactions/', 
      {
        title,
        type,
        amount,
        planned,
        notes,
      });
      res.data && window.location.replace('/'); 
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classes.addtrans}>
      <h4 className={classes.addtrans__head}>New Transaction</h4>
      <form className={classes.addtrans__form} onSubmit={handleSubmit}>
        <div className={classes.addtrans__form__grp}>
          <input 
            className={classes.addtrans__form__grp__item} 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
            placeholder='Title'
          />
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
            type='text'
            value={amount}
            onChange={(e) => setAmount(e.target.value)} 
            placeholder='Amount'
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
            // having issues with getting toggle to change state 
            // in component... 
            onChange={(e) => setPlanned(!e.target.value)}
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
