// import axios from 'axios';
import { createContext, useReducer } from 'react';
import Reducer from './Reducer';
// import TransReducer from './TransReducer';

// Initial State
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};

// const INITIAL_TRANS_STATE = {
//   transactions: [],
//   isFetching: false,
//   error: false,
// };

// create context
export const Context = createContext(INITIAL_STATE);
// export const TransContext = createContext(INITIAL_TRANS_STATE);

// PROVIDER Componenet
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  // const [transState, transDispatch] = useReducer(TransReducer, INITIAL_TRANS_STATE);

  // async function getAllTrans() {

  //   try {
  //     const res = await axios.get('http://localhost:5000/api/transactions/')
  //     transDispatch({
  //       type: 'GET_ALL_TRANS',
  //       payload: res.data.data
  //     });
  //   } catch (err) {
  //     transDispatch({
  //       type: 'TRANS_ERROR',
  //       payload: err.res.data.error
  //     });
  //   }
  // }

  return (
    <Context.Provider value={{
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch
    }}>
      {children}
    </Context.Provider>
  )
}