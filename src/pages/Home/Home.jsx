import { Container } from 'react-bootstrap';

import logo from '../../assets/kidiLink_logo_without_background.png';

const Home = () => {
  return (
    <main>
      <Container gap={5} className="col-md-8 mx-auto mt-5">
        <div>
          <h1>
            Bienvenue
            <br />
            sur Kidi&apos; Link
          </h1>
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

export default Home;
