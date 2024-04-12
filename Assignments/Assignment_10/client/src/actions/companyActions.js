// actions/companyActions.js

export const setCompanies = (companies) => ({
    type: 'SET_COMPANIES',
    payload: companies
  });
  
  export const fetchError = (error) => ({
    type: 'FETCH_ERROR',
    payload: error
  });
  