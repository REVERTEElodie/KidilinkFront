import { CHANGE_CLASSE_FIELD } from '../actions/ClasseForm';

export const initialState = {
  // Nom de la classe
  classeName: '',
  // Année scolaire de la classe
  sessionOf: '',
};

/* reducer qui s'occupe de ce qui concerne la classe */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CLASSE_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
