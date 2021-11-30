import { createContext, useReducer } from 'react';
import acctReducer from './acctReducer';

const USER_ACCOUNTS = {
  accounts: [],
  isFetching: false,
  error: false,
}


export const AcctContext = createContext(USER_ACCOUNTS);

export const AcctContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(acctReducer, USER_ACCOUNTS);

  return (
    <AcctContext.Provider value={{
      accounts: state.accounts,
      isFetching: state.isFetching,
      error: state.error,
      dispatch
    }}>
      {children}
    </AcctContext.Provider>
  )
}