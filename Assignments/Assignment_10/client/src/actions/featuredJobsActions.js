// actions/featuredJobsActions.js

export const setFeaturedJobs = (jobs) => {
    return {
      type: 'SET_FEATURED_JOBS',
      payload: jobs,
    };
  };
  