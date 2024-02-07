import { Stack, Container } from 'react-bootstrap';
import logo from '../../assets/kidiLink_logo_without_background.png';

import './MainContainer.scss';

const MainContainer = () => {
  return (
    <main>
      <Container gap={5} className="col-md-5 mx-auto mt-5">
        <div>
          <h1>Bienvenue sur ...</h1>
        </div>
        <div>
          <img
            src={logo}
            width="60%"
            className="d-inline-block align-top"
            alt="Kidi' Link logo"
          />
        </div>
      </Container>
    </main>
  );
};

export default MainContainer;
