import { useEffect, useState } from 'react';

import classes from './Home.module.scss';

import Header from '../../components/Header/Header';
import IncExpLedger from '../../components/IncExpLedger/IncExpLedger';
import TransactionList from '../../components/TransactionList/TransactionList';
import AddTransaction from '../../components/AddTransaction/AddTransaction';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

export default function Home() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions/')
      .then((res) => {
        setData(res.data);
      })
      .catch ((err) => {
        console.log(err);
      })
  }, []);

  const transactions = data.data;
  console.log(transactions);

  return (
    <div className={classes.home}>
      <Header />
        <IncExpLedger />
        <TransactionList transactions={transactions} />
        <AddTransaction />
      <Footer />
    </div>
  )
}
