import { CHANGE_ALBUM_FIELD } from '../actions/AlbumForm';

export const initialState = {
  // Nom de l'album
  albumName: '',
  // Description
  description: '',
};

/* reducer qui s'occupe de ce qui concerne la classe */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ALBUM_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
