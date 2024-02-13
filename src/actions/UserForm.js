// ici on placera les actions qui concernent le formulaire de gestion des utilisateurs
export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const SUBMIT_USER_FORM = 'SUBMIT_USER_FORM';

// Control of the component Form
export const changeUserField = (value, identifier) => ({
  type: CHANGE_USER_FIELD,
  value,
  identifier,
});

export const submitUserForm = () => ({
  type: SUBMIT_USER_FORM,
});
