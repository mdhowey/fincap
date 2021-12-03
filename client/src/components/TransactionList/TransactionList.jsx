import Transaction from '../Transaction/Transaction';
import classes from './TransactionList.module.scss';
import axios from 'axios';

export default function TransactionList(props) {
  const { transactions } = props; 
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const deleteTransaction = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/transactions/${id}`, {
       
      });
      res.data && window.location.replace('/'); 
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classes.transList}>
      <div className={classes.transList__cont}>
        <h4 className={classes.transList__cont__head}>Activity</h4>
        <h4 className={classes.transList__cont__date}>{date}</h4>
      </div>
       {transactions && 
        <ul className={classes.transList__list}>
          {transactions.map(
            transaction => (
              <Transaction 
                key={transaction._id} 
                transaction={transaction} 
              />
            )
          )}
        </ul>
      }
    </div>
  )
}
