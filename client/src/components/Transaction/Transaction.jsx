import classes from './Transaction.module.scss';
import { FiTrash2 } from 'react-icons/fi';

export default function Transaction({ transaction }) {
  const sign = transaction.type === 'expense' ? '-' : '+';
  return (
    <li className={classes.transList__list__item}>
      <p className={classes.transList__list__item__title}>{transaction.title}</p>
      <p className={classes.transList__list__item__amt}>{sign}{transaction.amount}</p>
      <button className={classes.transList__list__item__delete}>
        <FiTrash2 className={classes.transList__list__item__delete__icon} />
      </button>
    </li>
  )
}
