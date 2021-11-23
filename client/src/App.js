import Header from "./components/Header/Header";
import classes from './App.module.scss';
import Balance from "./components/Balance/Balance";
import IncExpLedger from "./components/IncExpLedger/IncExpLedger";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={classes.container}>
        <Balance />
        <IncExpLedger />
      </div>
    </div>
  );
}

export default App;
