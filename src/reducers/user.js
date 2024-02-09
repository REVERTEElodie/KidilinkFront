import { CHANGE_LOGIN_FIELD, HANDLE_SUCCESSFUL_LOGIN } from '../actions/user';

export const initialState = {
  // indique si l'utilisateur est authentifié
  logged: false,
  // contenu du champ email du formulaire de login
  email: '',
  // contenu du champ password du formulaire de login
  password: '',
};

/* reducer qui s'occupe de ce qui concerne l'utilisateur */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
