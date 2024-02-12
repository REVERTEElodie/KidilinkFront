import { combineReducers } from 'redux';

import userReducer from './user';
import contactFormReducer from './contactForm';
import addUserFormReducer from './addUserForm';

// le reducer principal : met en place les "tiroirs" dans le state et indiquer quel reducer
// s'occupe de quel tiroir
const rootReducer = combineReducers({
  // nom du tiroir: reducer qui s'en occupe
  user: userReducer,
  contactForm: contactFormReducer,
  addUserForm: addUserFormReducer,
});

export default rootReducer;
