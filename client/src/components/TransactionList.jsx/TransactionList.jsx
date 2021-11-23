import classes from './TransactionList.module.scss';
import { FiTrash2 } from 'react-icons/fi';

export default function TransactionList() {
  return (
    <div className={classes.transList}>
      <h4 className={classes.transList__title}>Recent Transactions</h4>
      <ul className={classes.transList__list}>
        <li className={classes.transList__list__item}>
          <p className={classes.transList__list__item__title}>Title</p>
          <p className={classes.transList__list__item__amt}>$100.00</p>
          <button className={classes.transList__list__item__delete}>
            <FiTrash2 className={classes.transList__list__item__delete__icon}/>
          </button>
        </li>
      </ul>
    </div>
  )
}
