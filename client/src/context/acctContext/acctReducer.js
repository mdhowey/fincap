const acctReducer = (state, action) => {
  switch(action.type) {
    case 'USER_ACCT_STATE':
      return {
        accounts: [],
        isFetching: false,
        error: false,
      };
    default: 
      return state;
  }
}

export default acctReducer;