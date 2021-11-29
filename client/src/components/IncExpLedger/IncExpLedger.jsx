import classes from './IncExpLedger.module.scss';
// import { useContext } from 'react';
// import { Context } from '../../context/Context';

export default function IncExpLedger() {
  // const { transactions } = useContext(Context);

  // const amounts = transactions.map(transaction => transaction.amount);

  // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // const inc = amounts
  //   .filter(item => item > 0)
  //   .reduce((acc, item) => (acc += item), 0)
  //   .toFixed(2);
  
  // const exp = amounts
  //   .filter(item => item < 0)
  //   .reduce((acc, item) => (acc += item), 0);

  return (
    <div className={classes.incExp}>
      <div className={classes.incExp__item}>
        <h3>Income</h3>
        {/* <h4 className={classes.incExp__item__pos}>{inc}</h4> */}
      </div>
      <div className={classes.incExp__item}>
        <h3>Expenses</h3>
        {/* <h4 className={classes.incExp__item__neg}>{Math.abs(exp).toFixed(2)}</h4> */}
      </div>
    </div>
  )
}
