// actions/employeeActions.js
export const setUsers = (users) => {
    return {
      type: 'SET_USERS',
      payload: users,
    };
  };
  
  export const setIsAdmin = (isAdmin) => {
    return {
      type: 'SET_IS_ADMIN',
      payload: isAdmin,
    };
  };
  
  export const fetchUsers = () => {
    return async (dispatch) => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/user/getAll', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        });
        if (!response.ok) {
          if (response.status === 403) {
            dispatch(setIsAdmin(false)); // Dispatching action if not admin
          }
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        dispatch(setUsers(data)); // Dispatching action to set users
        dispatch(setIsAdmin(true)); // Assuming successful fetch means admin access
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  };
  