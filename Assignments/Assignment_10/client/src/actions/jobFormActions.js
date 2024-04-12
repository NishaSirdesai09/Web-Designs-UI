// actions/jobFormActions.js

export const updateJobForm = (field, value) => ({
    type: 'UPDATE_JOB_FORM',
    payload: { field, value }
  });
  
  export const submitJobForm = () => ({
    type: 'SUBMIT_JOB_FORM'
  });
  
  export const jobFormSuccess = (message) => ({
    type: 'JOB_FORM_SUCCESS',
    payload: message
  });
  
  export const jobFormFail = (error) => ({
    type: 'JOB_FORM_FAIL',
    payload: error
  });
  
  export const resetJobForm = () => ({
    type: 'RESET_JOB_FORM'
  });
  