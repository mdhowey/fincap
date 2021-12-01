import { useEffect, useState } from 'react';

import classes from './Home.module.scss';

import Header from '../../components/Header/Header';
import IncExpLedger from '../../components/IncExpLedger/IncExpLedger';
import TransactionList from '../../components/TransactionList/TransactionList';
import AddTransaction from '../../components/AddTransaction/AddTransaction';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/transactions/')
      .then((res) => {
        setData(res.data);
      })
      .catch ((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  const transactions = [data, loading, error];

  console.log(transactions);

  return (
    <div className={classes.home}>
      <Header />
        <IncExpLedger />
        <TransactionList />
        <AddTransaction />
      <Footer />
    </div>
  )
}
