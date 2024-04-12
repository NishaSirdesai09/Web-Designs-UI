// reducers/companyReducer.js

const initialState = {
    companies: [],
    error: null
  };
  
  const companyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COMPANIES':
        return {
          ...state,
          companies: action.payload,
          error: null
        };
      case 'FETCH_ERROR':
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default companyReducer;
  