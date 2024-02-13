// ici on placera les actions qui concernent le formulaire de gestion des utilisateurs
export const CHANGE_ALBUM_FIELD = 'CHANGE_ALBUM_FIELD';
export const SUBMIT_ALBUM_FORM = 'SUBMIT_ALBUM_FORM';

// Control of the component Form
export const changeAlbumField = (value, identifier) => ({
  type: CHANGE_ALBUM_FIELD,
  value,
  identifier,
});

export const submitAlbumForm = () => ({
  type: SUBMIT_ALBUM_FORM,
});
