import { CHANGE_CONTACT_FIELD } from '../actions/contactForm';

export const initialState = {
  // prénom de l'utilisateur (quand il est authentifié)
  firstName: '',
  // prénom de l'utilisateur (quand il est authentifié)
  lastName: '',
  // contenu du champ email du formulaire de login
  email: '',
  // prénom de l'utilisateur (quand il est authentifié)
  selectObject: '',
  // prénom de l'utilisateur (quand il est authentifié)
  message: '',
};

/* reducer qui s'occupe de ce qui concerne l'utilisateur */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
