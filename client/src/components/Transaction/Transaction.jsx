import classes from './Transaction.module.scss';
import { FiTrash2 } from 'react-icons/fi';

export default function Transaction({ transaction, deleteTransaction }) {

  const sign = transaction.type === 'expense' ? '-' : '+';

  return (
    <li className={transaction.type === 'expense' ? classes.tran : classes.tran}>
      <p className={classes.tran__title}>{transaction.title}</p>
      <p className={classes.tran__amt}>{sign} ${Math.abs(transaction.amount)}</p>
      <button
        className={classes.tran__btn}
        onChange={(e) => (deleteTransaction(e))}>
        <FiTrash2 className={classes.tran__btn__delete} />
      </button>
    </li>
  )
}
