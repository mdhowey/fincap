import Header from "./components/Header/Header";
import classes from './App.module.scss';
import Balance from "./components/Balance/Balance";
import IncExpLedger from "./components/IncExpLedger/IncExpLedger";
import TransactionList from "./components/TransactionList.jsx/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";


function App() {
  return (
    <div className="App">
      <Header />
      <div className={classes.container}>
        <Balance />
        <IncExpLedger />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
