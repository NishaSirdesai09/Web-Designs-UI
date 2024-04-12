// reducers/jobReducer.js

const initialState = {
    jobs: [],
    page: 0,
    rowsPerPage: 5
  };
  
  const jobReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_JOBS':
        return {
          ...state,
          jobs: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  