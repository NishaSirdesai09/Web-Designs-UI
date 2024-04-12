// actions/contactActions.js

export const updateContactForm = (field, value) => ({
    type: 'UPDATE_CONTACT_FORM',
    payload: { field, value }
  });
  
  export const resetContactForm = () => ({
    type: 'RESET_CONTACT_FORM'
  });
  