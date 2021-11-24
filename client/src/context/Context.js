import { createContext, useReducer } from 'react';
import Reducer from './Reducer';

// Initial State
const INITIAL_STATE = {
  transactions: [
    {
      id: '1',
      title: 'shoes',
      type: 'expense',
      amount: -120,
      account: 'checking',
      planned: false,
      notes: 'shoes for wedding',
    },
    {
      id: '2',
      title: 'programming',
      type: 'income',
      amount: 1000,
      account: 'checking',
      planned: true,
      notes: 'weekly wage for job',
    },
    {
      id: '3',
      title: 'freelance website',
      type: 'income',
      amount: 500,
      account: 'checking',
      planned: false,
      notes: 'finsihed a website early for a friend',
    },
    {
      id: '4',
      title: 'dinner',
      type: 'expense',
      amount: -150,
      account: 'checking',
      planned: false,
      notes: 'surprise dinner for my wife',
    },
  ],
  accounts: [
    {
      id: '1',
      acctName: 'checking',
      balance: 3000,
      currency: 'USD',
      userId: '619beedd1ea2d2c98b64785d',
    },
    {
      id: '2',
      acctName: 'savings',
      balance: 10000,
      currency: 'USD',
      userId: '619beedd1ea2d2c98b64785d',
    },
  ],
};

// create context 
export const Context = createContext(INITIAL_STATE);

// PROVIDER Componenet
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  return (<Context.Provider value={{
    transactions: state.transactions,
    accounts: state.accounts,
    dispatch,
  }}>
    {children}
  </Context.Provider>)
}