// reducers/employeeReducer.js
const initialState = {
    users: [],
    isAdmin: true,
  };
  
  const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return {
          ...state,
          users: action.payload,
        };
      case 'SET_IS_ADMIN':
        return {
          ...state,
          isAdmin: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default employeeReducer;
  