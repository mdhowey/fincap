import Header from "./components/Header/Header";
import classes from './App.module.scss';
import AccountList from "./components/AccountList/AccountList";
import IncExpLedger from "./components/IncExpLedger/IncExpLedger";
import TransactionList from "./components/TransactionList.jsx/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import { ContextProvider } from "./context/Context";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <ContextProvider className="App">
      <Header />
      <div className={classes.container}>
        <AccountList />
        <IncExpLedger />
        <TransactionList />
        <AddTransaction />
      </div>
      <Footer />
    </ContextProvider>
  );
}

export default App;
