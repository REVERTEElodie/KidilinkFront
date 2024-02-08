import {
  Row,
  Col,
  Nav,
  InputGroup,
  Button,
  Form,
  Navbar,
  Container,
} from 'react-bootstrap';

import { Search } from 'react-bootstrap-icons';
import logo from '../../assets/kidiLink_logo_without_background.png';

import './AppHeader.scss';

const AppHeader = () => {
  return (
    <header className="Header">
      <Container sticky="top" className="p-2" fluid>
        <Row>
          <Col md={12} lg={3}>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="Kidi' Link logo"
              />
            </Navbar.Brand>
          </Col>

          <Col md={12} lg={3}>
            <Navbar>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Rechercher ..."
                  aria-label="Rechercher"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <Search />
                </Button>
              </InputGroup>
            </Navbar>
          </Col>

          <Col md={12} lg={3}>
            <Navbar className="justify-content-center">
              <Nav>
                <Nav.Item>
                  <Nav.Link href="#aPropos">A propos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Col>

          <Col className="p-2" md={12} lg={3}>
            <Button variant="secondary" size="sm">
              Connexion
            </Button>{' '}
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default AppHeader;