import { Stack, Container } from 'react-bootstrap';

import logo from '../../assets/kidiLink_logo_without_background.png';

import './MainContainer.scss';

const MainContainer = () => {
  return (
    <main>
      <Container gap={5} className="col-md-8 mx-auto mt-5">
        <div>
          <h1>h1 => Bienvenue sur ...</h1>
          <h2>h2 => Bienvenue sur ...</h2>
          <h3>h3 => Bienvenue sur ...</h3>
          <h4>h4 => Bienvenue sur ...</h4>
          <h5>h5 => Bienvenue sur ...</h5>
          <h6>h6 => Bienvenue sur ...</h6>
          <p>p => Bienvenue sur ...</p>
        </div>
        <div>
          <img
            src={logo}
            width="80%"
            className="d-inline-block align-top"
            alt="Kidi' Link logo"
          />
        </div>
      </Container>
    </main>
  );
};

export default MainContainer;
