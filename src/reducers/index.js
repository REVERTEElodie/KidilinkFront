import { combineReducers } from 'redux';

import userReducer from './user';
import contactFormReducer from './contactForm';
import UserFormReducer from './UserForm';
import ClasseFormReducer from './ClasseForm';
import CommentFormReducer from './CommentForm';

// le reducer principal : met en place les "tiroirs" dans le state et indiquer quel reducer
// s'occupe de quel tiroir
const rootReducer = combineReducers({
  // nom du tiroir: reducer qui s'en occupe
  user: userReducer,
  contactForm: contactFormReducer,
  UserForm: UserFormReducer,
  ClasseForm: ClasseFormReducer,
  CommentForm: CommentFormReducer,
});

export default rootReducer;
