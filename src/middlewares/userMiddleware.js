import api from '../api';

import { SUBMIT_LOGIN, handleSuccessfulLogin } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      api
        .post(
          // Send data connexion to the server
          '/login',
          {
            email: store.getState().user.email,
            password: store.getState().user.password,
          }
        )
        .then((response) => {
          // Recover and save the token on the state
          store.dispatch(handleSuccessfulLogin(response.data.token));
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
