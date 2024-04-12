// reducers/jobFormReducer.js

const initialState = {
    jobDetails: {
      name: '',
      jobTitle: '',
      description: '',
      salary: '',
    },
    isSubmitting: false,
    successMessage: '',
    errorMessage: ''
  };
  
  const jobFormReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_JOB_FORM':
        return {
          ...state,
          jobDetails: { ...state.jobDetails, [action.payload.field]: action.payload.value }
        };
      case 'SUBMIT_JOB_FORM':
        return {
          ...state,
          isSubmitting: true
        };
      case 'JOB_FORM_SUCCESS':
        return {
          ...state,
          isSubmitting: false,
          successMessage: action.payload,
          jobDetails: initialState.jobDetails // reset job details
        };
      case 'JOB_FORM_FAIL':
        return {
          ...state,
          isSubmitting: false,
          errorMessage: action.payload
        };
      case 'RESET_JOB_FORM':
        return initialState;
      default:
        return state;
    }
  };
  
  export default jobFormReducer;
  