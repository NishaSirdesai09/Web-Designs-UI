// actions/jobActions.js
import axios from 'axios';
export const setJobs = (jobs) => {
    return {
      type: 'SET_JOBS',
      payload: jobs,
    };
  };
  
  export const fetchJobs = () => {
    return async (dispatch) => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/get/jobs', {
          headers: {
            'x-auth-token': token,
          },
        });
        dispatch(setJobs(response.data));
      } catch (error) {
        console.error('Error fetching jobs:', error);
        // Handle errors, possibly with another action
      }
    };
  };
  