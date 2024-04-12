// actions/authActions.js
 
// Action to set the logged-in state
export const setLoggedIn = (loggedIn, userType) => {
    return {
      type: 'SET_LOGGED_IN',
      payload: { loggedIn, userType },
    };
  };
   
  // Action to log out
  export const logOut = () => {
    return {
      type: 'LOGOUT',
    };
  };
   
  // Thunk action for logging in
  export const login = (token, userType) => {
    return (dispatch) => {
      localStorage.setItem('token', token);
      localStorage.setItem('userType', userType);
      dispatch(setLoggedIn(true, userType));
    };
  };
   
  // Thunk action for logging out
  export const logout = () => {
    return (dispatch) => {
      localStorage.removeItem('token');
      localStorage.removeItem('userType');
      dispatch(logOut());
    };
  };