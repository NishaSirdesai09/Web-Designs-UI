const initialState = {
    loggedIn: false,
    userType: null,
  };
   
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOGGED_IN':
        return {
          ...state,
          loggedIn: action.payload.loggedIn,
          userType: action.payload.userType,
        };
      case 'LOGOUT':
        return {
          ...state,
          loggedIn: false,
          userType: null,
        };
      default:
        return state;
    }
  };
   
  export default authReducer;