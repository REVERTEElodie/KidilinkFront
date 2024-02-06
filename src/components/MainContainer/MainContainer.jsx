import logo from '../../assets/kidiLink_logo_without_background.png';

import './MainContainer.scss';

const MainContainer = () => {
  return (
    <main>
      <h1>Bienvenue sur ...</h1>
      <img
        src={logo}
        width="70%"
        height="70%"
        className="d-inline-block align-top"
        alt="Kidi' Link logo"
      />
    </main>
  );
};

export default MainContainer;
