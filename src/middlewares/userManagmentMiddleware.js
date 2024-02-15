import api from '../api';

import { SUBMIT_USER_FORM } from '../actions/UserForm';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_USER_FORM:
      api
        .post(
          // Send data connexion to the server
          '/users/nouveau',
          {
            userRole: store.getState().UserForm.userRole,
            firstName: store.getState().UserForm.firstNameName,
            lastName: store.getState().UserForm.lastName,
            email: store.getState().UserForm.email,
            password: store.getState().UserForm.password,
          }
        )
        .then((response) => {
          // Recover and save the token on the state
          // store.dispatch(handleSuccessfulLogin(response.data.token));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default userMiddleware;
