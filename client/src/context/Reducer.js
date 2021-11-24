const Reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANS':
      return {
        ...state, 
        transactions: state.transactions.filter(
          transaction => transaction.id !==action.payload)
      }
    default: 
      return state;
  }
}

export default Reducer;