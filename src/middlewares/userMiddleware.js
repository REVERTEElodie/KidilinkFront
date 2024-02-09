import axios from 'axios';

import {
  CHANGE_LOGIN_FIELD,
  SUBMIT_LOGIN,
  handleSuccessfulLogin,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  // console.log('on a intercepté une action dans le middleware: ', action);

  switch (action.type) {
    case SUBMIT_LOGIN:
      console.log(store.getState().user.email);
      console.log(store.getState().user.password);

      // => undefined, on a oublié le nom du tiroir
      axios
        .post(
          // URL
          'http://localhost:3001/login_check',
          // données => on peut les visualiser dans l'onglet Network du dev tool,
          // en cliquant sur la requête, et en regardant l'onglet payload
          {
            // /!\ ne pas oublier le nom du tiroir (visualiser le state dans
            // le redux dev tool plutôt que regarder le code du reducer)
            email: store.getState().user.email,
            password: store.getState().user.password,
          }
        )
        .then((response) => {
          // console.log(response);

          // on a 3 informations : pseudo de l'utilisateur, logged (pas utile,
          // ce sera forcément true), et un "token"

          // on veut enregistrer le pseudo et le token dans le state => dispatch
          // une action, qui sera traitée par un/des reducer(s)

          // option : vérifier le chemin des infos qu'on veut utiliser
          // console.log(
          //   `pseudo: ${response.data.pseudo}, token: ${response.data.token}`
          // );

          store.dispatch(
            handleSuccessfulLogin(response.data.pseudo, response.data.token)
          );

          /* en deux étapes, /!\ ne pas nommer la variable "action"
          const actionToDispatch = handleSuccessfulLogin(
            response.data.pseudo,
            response.data.token
          );
          store.dispatch(actionToDispatch);
          */

          // à partir de là, on sait qu'on a un token JWT dans le state
          // store.dispatch(fetchFavoriteRecipes());
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }

  // on passe l'action au suivant (middleware suivant ou reducer)
  next(action);
};

export default userMiddleware;
