// reducers/contactReducer.js

const initialState = {
    name: '',
    email: '',
    message: ''
  };
  
  const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CONTACT_FORM':
        return {
          ...state,
          [action.payload.field]: action.payload.value
        };
      case 'RESET_CONTACT_FORM':
        return initialState;
      default:
        return state;
    }
  };
  
  export default contactReducer;
  