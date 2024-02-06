import logo from '../../assets/kidiLink_logo_without_title.png';

import './AppFooter.scss';

const AppFooter = () => {
  return (
    <footer>
      ici le footer de l'app
      <div>
        partie gauche : nav
        <nav>
          <ul>
            <li>Accueil</li>
            <li>A propos</li>
            <li>Mentions légales</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
      <div>partie centrale : logo</div>
      <div>
        partie droite : restons connectez
        <div>Nav : liens reseaux sociaux</div>
        <div>boutton : Nous écrire... lien page contact</div>
      </div>
      Copyright Team Kidi' Link | 2024
    </footer>
  );
};

export default AppFooter;
