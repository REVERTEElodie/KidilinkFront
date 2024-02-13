import { CHANGE_USER_FIELD } from '../actions/UserForm';

export const initialState = {
  // prénom de l'utilisateur
  firstName: '',
  // prénom de l'utilisateur
  lastName: '',
  // email de l'utilisateur
  email: '',
  // mot de passe de l'utilisateur
  password: '',
  // role de l'utilisateur
  userRole: '',
};

/* reducer qui s'occupe de ce qui concerne l'utilisateur */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
