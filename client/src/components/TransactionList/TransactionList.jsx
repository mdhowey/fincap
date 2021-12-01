import classes from './TransactionList.module.scss';
import Transaction from '../Transaction/Transaction';

export default function TransactionList() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div className={classes.transList}>
      <div className={classes.transList__cont}>
        <h4 className={classes.transList__cont__head}>Activity</h4>
        <h4 className={classes.transList__cont__date}>{date}</h4>
      </div>
      <ul className={classes.transList__list}>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </ul>
    </div>
  )
}
