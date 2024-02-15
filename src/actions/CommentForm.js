// ici on placera les actions qui concernent le formulaire de gestion des utilisateurs
export const CHANGE_COMMENT_FIELD = 'CHANGE_COMMENT_FIELD';
export const SUBMIT_COMMENT_FORM = 'SUBMIT_COMMENT_FORM';

// Control of the component Form
export const changeCommentField = (value, identifier) => ({
  type: CHANGE_COMMENT_FIELD,
  value,
  identifier,
});

export const submitCommentForm = () => ({
  type: SUBMIT_COMMENT_FORM,
});
