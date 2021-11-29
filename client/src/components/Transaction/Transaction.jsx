import classes from './Transaction.module.scss';
import { FiTrash2 } from 'react-icons/fi';
import { FiEdit } from 'react-icons/fi';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Transaction({ transaction }) {

  const { deleteTransaction} = useContext(Context);

  const sign = transaction.type === 'expense' ? '-' : '+';

  return (
    <li className={transaction.type === 'expense' ? classes.tran : classes.tran}>
      <p className={classes.tran__title}>{transaction.title}</p>
      <p className={classes.tran__amt}>{sign} ${Math.abs(transaction.amount)}</p>
      <button
        className={classes.tran__btn}>
        <FiTrash2 className={classes.tran__btn__delete} />
      </button>
      <button
        className={classes.tran__btn}
        onClick={() => deleteTransaction(transaction.id)}>
        <FiEdit className={classes.tran__btn__edit} />
      </button>
    </li>
  )
}
