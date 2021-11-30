const Reducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN_STATE':
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    case 'LOGOUT':
      return {
        user: null,
        isFetching: false,
        error: false,
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state, 
        transactions: state.transactions.filter(
          transaction => transaction.id !==action.payload)
      };
    case 'ADD_TRANSACTION':
      return {
        ...state, 
        transactions: [
          action.payload,
          ...state.transactions
        ]
      };
    default: 
      return state;
  }
}

export default Reducer;