// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from './reducers/authReducers';
import jobReducer from './reducers/jobReducers';
import jobListingReducer from './reducers/jobListingReducer';
import featuredJobsReducer from './reducers/featuredJobsReducer';
import employeeReducer from './reducers/employeeReducer';
import contactReducer from './reducers/contactReducer'; 
import companyReducer from './reducers/companyReducer';  
import jobFormReducer from './reducers/jobFormReducer';  
import modalReducer from './reducers/modalReducer';  

const rootReducer = combineReducers({
    auth: authReducer,
    jobs: jobReducer,
    jobListings: jobListingReducer,
    featuredJobs: featuredJobsReducer,
    employee: employeeReducer,
    contact: contactReducer,
    companyData: companyReducer,
    jobForm: jobFormReducer,
    modal: modalReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk) 
    )
);

export default store;
