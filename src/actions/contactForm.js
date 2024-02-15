// ici on placera les actions qui concernent le formulaire de contact
export const CHANGE_CONTACT_FIELD = 'CHANGE_CONTACT_FIELD';
export const SUBMIT_CONTACT_FORM = 'SUBMIT_CONTACT_FORM';

// Control of the component Form
export const changeContactField = (value, identifier) => ({
  type: CHANGE_CONTACT_FIELD,
  value,
  identifier,
});

export const submitContactForm = () => ({
  type: SUBMIT_CONTACT_FORM,
});
