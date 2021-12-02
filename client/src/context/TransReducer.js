// const TransReducer = (state, action) => {
//   switch(action.type) {
//     case 'GET_ALL_TRANS':
//       return {
//         ...state,
//         isFetching: true,
//         transactions: action.payload,
//       }
//     case 'ADD_TRANS':
//       return {
//         ...state,
//         transactions: [ 

//           ...state.transactions, 
//           action.payload

//         ]
//       }
//     case 'DELETE_TRANS':
//       return {
//         ...state,
//         transactions: state.transactions.filter
//           (
//             transaction => transaction._id !== action.payload
//           )
//       }
//     case 'TRANS_ERROR':
//       return {
//         ...state,
//         isFetching: false,
//         error: action.payload,
//       }
//     default:
//       return state;
//   }
// }

// export default TransReducer;