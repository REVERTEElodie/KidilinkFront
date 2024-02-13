// ici on placera les actions qui concernent le formulaire de gestion des utilisateurs
export const CHANGE_CLASSE_FIELD = 'CHANGE_CLASSE_FIELD';
export const SUBMIT_CLASSE_FORM = 'SUBMIT_CLASSE_FORM';

// Control of the component Form
export const changeClasseField = (value, identifier) => ({
  type: CHANGE_CLASSE_FIELD,
  value,
  identifier,
});

export const submitClasseForm = () => ({
  type: SUBMIT_CLASSE_FORM,
});
