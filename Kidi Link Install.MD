# INSTALLER LA PARTIE FRONT DU PROJET KIDI' LINK

> **ATTENTION**
> ne pas clôner de suite le repo du Front, c'est plus tard à l'aide de l'assistant.

## 1 - Créer le projet REACT avec l'assistant Vite

Il faut le cloner dans le dossier dans lequel on aura le projet REACT concerné.

Voici le lien du model : https://drive.google.com/drive/folders/1OUAPsxfQSOcAgCHHjOzvsLOT7gkH5Nrc?usp=drive_link

RDV ensuite dans le dossier qui va contenir le nouveau projet :

```sh
      cd dossier/avec/mes_challenges
      # Exemple : ../../../Spe-React

      # lancer le script
      ./React-modele-vite/bin/install.sh
      # si nécessaire, donner les droits à ce fichier :
      # `chmod +x ./React-modele-vite/bin/install.sh`
      # (un `sudo` peut être nécessaire)

      # renseigner soit :
      #   - le nom de votre nouveau projet (ex : my-app)
      #   - soit l'adresse SSH d'un dépôt Git (ex : git@github.com:O-clock-MA_PROMO/NOM_CHALLENGE.git)
```

Et voilà le projet est crée.

## 2 - On installe les dépendances

Pour se faire, il faut installer d'abord Yarn : `npm install --global yarn` 
Puis on saisit la commande `yarn` dans le terminal en s'assurant qu'on est bien dans le repo du **Front**.
`npm install react-bootstrap bootstrap`
`npm i bootstrap-icons`

## 3 - On lance le server et on check la config

Petite vérif, une fois les dépendances installées, on exécute la commande `yarn dev`pour lancer le server et avoir le rendu en direct du projet.

Pour s'y connecter : `http://localhost:5173/`

Si tout s'est bien déroulé, le fichier `package.json` devrait ressembler à ça :

```json
{
  "name": "kidi-link",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "tsc --noEmit && eslint src/**/*.{js,jsx,ts,tsx} --cache --max-warnings=0",
    "lint:fix": "eslint src/**/*.{js,jsx,ts,tsx} --fix"
  },
  "dependencies": {
    "@emotion/react": "^11.11.3",
    "@emotion/styled": "^11.11.0",
    "@mui/icons-material": "^5.15.7",
    "@mui/joy": "^5.0.0-beta.25",
    "@mui/material": "^5.15.7",
    "@mui/styled-engine-sc": "^6.0.0-alpha.14",
    "@redux-devtools/extension": "^3.3.0",
    "axios": "^1.6.7",
    "dompurify": "^3.0.8",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^9.1.0",
    "react-router-dom": "^6.22.0",
    "redux": "^5.0.1",
    "styled-components": "^6.1.8"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@typescript-eslint/eslint-plugin": "^5.58.0",
    "@typescript-eslint/parser": "^5.58.0",
    "@vitejs/plugin-react": "^3.1.0",
    "eslint": "8.2.0",
    "eslint-config-airbnb": "19.0.4",
    "eslint-config-airbnb-typescript": "^17.0.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-import": "2.25.3",
    "eslint-plugin-jsx-a11y": "6.5.1",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-react": "7.28.0",
    "eslint-plugin-react-hooks": "4.3.0",
    "prettier": "^2.8.7",
    "sass": "^1.62.0",
    "typescript": "^4.9.3",
    "vite": "^4.2.0"
  }
}
```

## Good job , Enjoy
