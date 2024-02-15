import { CHANGE_COMMENT_FIELD } from '../actions/CommentForm';

export const initialState = {
  // Commentaire
  comment: '',
};

/* reducer qui s'occupe de ce qui concerne la classe */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_COMMENT_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
