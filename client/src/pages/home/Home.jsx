import classes from './Home.module.scss';

import Header from '../../components/Header/Header';
import AccountList from '../../components/AccountList/AccountList';
import IncExpLedger from '../../components/IncExpLedger/IncExpLedger';
import TransactionList from '../../components/TransactionList/TransactionList';
import AddTransaction from '../../components/AddTransaction/AddTransaction';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <div className={classes.home}>
      <Header />
        <AccountList />
        <IncExpLedger />
        <TransactionList />
        <AddTransaction />
      <Footer />
    </div>
  )
}
