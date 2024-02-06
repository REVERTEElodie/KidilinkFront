import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';

import logo from '../../assets/kidiLink_logo_without_title.png';

import './AppHeader.scss';

const AppHeader = () => {
  return (
    <header className="Header">
      <Navbar className="" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Kidi' Link logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className="justify-content-between">
        <Form inline>
          <InputGroup>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">Send</InputGroup.Text>
          </InputGroup>
        </Form>
      </Navbar>
      <Navbar className="">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Actus</Nav.Link>
              <Nav.Link href="#aPropos">A propos</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Button variant="primary" size="sm">
        Connexion
      </Button>{' '}
    </header>
  );
};

export default AppHeader;

/* <div>logo</div>
      <div>search bar</div>
      <div>button/icon ...fil d'actu</div>

      <div>button connexion/déconnexion</div> */
