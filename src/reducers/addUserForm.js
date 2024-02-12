import { CHANGE_USER_FIELD } from '../actions/addUserForm';

export const initialState = {
  // prénom de l'utilisateur
  firstName: '',
  // prénom de l'utilisateur
  lastName: '',
  // email de l'utilisateur
  email: '',
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
