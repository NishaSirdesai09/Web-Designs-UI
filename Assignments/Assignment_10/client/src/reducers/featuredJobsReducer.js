// reducers/featuredJobsReducer.js

const initialState = {
    featuredJobs: [],
  };
  
  const featuredJobsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FEATURED_JOBS':
        return {
          ...state,
          featuredJobs: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default featuredJobsReducer;
  