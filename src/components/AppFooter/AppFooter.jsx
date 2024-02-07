import { Col, Container, Row, Nav, Button, Navbar } from 'react-bootstrap';

import logo from '../../assets/kidiLink_logo_without_title.png';
import facebookLogo from '../../assets/img/socialMedia/facebook.svg';
import instaLogo from '../../assets/img/socialMedia/instagram.svg';
import linkedinLogo from '../../assets/img/socialMedia/linkedin.svg';
import twitter_xLogo from '../../assets/img/socialMedia/twitter_X.svg';

import './AppFooter.scss';

const AppFooter = () => {
  return (
    <footer className="Footer">
      <Container fluid>
        <Row>
          <Col md={12} lg={4}>
            <Nav className="flex-column">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#home">A propos</Nav.Link>
              <Nav.Link href="#home">Mentions légales</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={12} lg={4}>
            <div className="Footer-col">
              <div>
                <Navbar>
                  <Navbar.Brand href="#home">
                    <img
                      src={logo}
                      width="100"
                      height="100"
                      className="d-inline-block align-top"
                      alt="Kidi' Link logo"
                    />
                  </Navbar.Brand>
                </Navbar>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4}>
            <div className="Footer-col">
              <h5>Restez connectés</h5>
              <div>
                <Nav className="flex-row">
                  <Nav.Link href="#home">
                    <img
                      src={facebookLogo}
                      width="28"
                      height="28"
                      className="d-inline-block align-top"
                      alt="Facebook logo"
                    />
                  </Nav.Link>
                  <Nav.Link href="#home">
                    {' '}
                    <img
                      src={instaLogo}
                      width="28"
                      height="28"
                      className="d-inline-block align-top"
                      alt="Instagram logo"
                    />
                  </Nav.Link>
                  <Nav.Link href="#home">
                    {' '}
                    <img
                      src={linkedinLogo}
                      width="28"
                      height="28"
                      className="d-inline-block align-top"
                      alt="Linked'In logo"
                    />
                  </Nav.Link>
                  <Nav.Link href="#home">
                    {' '}
                    <img
                      src={twitter_xLogo}
                      width="28"
                      height="28"
                      className="d-inline-block align-top"
                      alt="Twitter / X logo"
                    />
                  </Nav.Link>
                </Nav>
              </div>
              <Button variant="secondary" size="sm">
                Nous écrire
              </Button>{' '}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="FooterCopyRight">
        <p>Copyright Team Kidi&apos; Link | 2024</p>
      </div>
    </footer>
  );
};

export default AppFooter;
