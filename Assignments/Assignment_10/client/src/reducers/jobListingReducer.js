// reducers/jobListingReducer.js

const initialState = {
    jobListings: [],
  };
  
  const jobListingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_JOB_LISTINGS':
        return {
          ...state,
          jobListings: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default jobListingReducer;
  