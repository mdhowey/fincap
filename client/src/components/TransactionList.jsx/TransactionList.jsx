import { useContext } from 'react';
import classes from './TransactionList.module.scss';
import { Context } from '../../context/Context';
import Transaction from '../Transaction/Transaction';

export default function TransactionList() {
  const { transactions } = useContext(Context);

  return (
    <div className={classes.transList}>
      <h4 className={classes.transList__head}>Activity</h4>
      <ul className={classes.transList__list}>
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}
