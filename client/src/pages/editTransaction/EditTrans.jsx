import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import classes from './EditTrans.module.scss';
import axios from 'axios';


export default function EditTrans() {

  const navigate = useNavigate();

  const { state } = useLocation();

  // console.log(state)

  const cancel = () => navigate('/');
  const [inputs, setInputs] = useState({
    title: state.title,
    type: state.type,
    amount: state.amount,
    planned: state.planned,
    notes: state.notes,
  });

  const { title, type, amount, planned, notes } = inputs;
  const onChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5000/api/transactions/${state._id}`, 
        
        {
          title,
          type,
          amount, 
          planned, 
          notes
        }

      );
      res.data && window.location.replace('/'); 
      navigate('/');
    } catch (err) {
      console.log(err);
    }

  }
  
  return (
    <>
      <Header />
      <div className={classes.addtrans}>
        <h4 className={classes.addtrans__head}>Edit Transaction</h4>
        <form className={classes.addtrans__form} onSubmit={(e) => (handleSubmit(e))}>
          <div className={classes.addtrans__form__grp}>
            <input 
              className={classes.addtrans__form__grp__item} 
              type='text'
              name='title'
              value={title}
              onChange={(e) => onChange(e)} 
              placeholder='Title'
            />
            <input 
              className={classes.addtrans__form__grp__item} 
              type='text'
              name='type'
              value={type}
              onChange={(e) => onChange(e)} 
              placeholder='Type'
            />
          </div>
          <div className={classes.addtrans__form__grp}>
            <input 
              className={classes.addtrans__form__grp__item} 
              type='text'
              name='amount'
              value={amount}
              onChange={(e) => onChange(e)} 
              placeholder='Amount'
            />
          </div>
          <div className={classes.addtrans__form__grp}>
            <textarea 
              className={classes.addtrans__form__grp__item} 
              value={notes}
              onChange={(e) => onChange(e)}
              type='text'
              name='notes' 
              placeholder='Notes'
            />
          </div>
          <div className={classes.addtrans__form__switch}>
            <span>Planned?</span>
            <input 
              className={classes.addtrans__form__switch__checkbox1}
              id='planned__toggle' 
              type='checkbox'
              name='planned' 
              value={planned}
              onChange={(e) => onChange(e)}
              placeholder='Planned'
            />
            <label htmlFor="planned__toggle"></label>
          </div>
          <div className={classes.addtrans__form__btncont}>
            <button type='submit' className={classes.addtrans__form__btncont__submit}>Submit</button>
          </div>
          <div className={classes.addtrans__form__btncont}>
            <button onClick={cancel} className={classes.addtrans__form__btncont__cancel}>cancel</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
