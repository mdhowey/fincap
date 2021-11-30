export const LoginStart = (userCredentials) => ({
  type: 'LOGIN_START',
});

export const LoginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const LoginFailure = () => ({
  type: 'LOGIN_FAILURE',
});

export const Logout = () => ({
  type: 'LOGOUT',
});

export const DeleteTrans = (id) => ({
  type: 'DELETE_TRANS',
  payload: id
});

export const DeleteTransaction = (id) => ({
    type: 'DELETE_TRANSACTION',
    paylod: id
});

export const addTransaction = (transaction) => ({
    type: 'ADD_TRANSACTION',
    paylod: transaction
});