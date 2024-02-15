import { Row, Col, Container } from 'react-bootstrap';

import './AppHeader.scss';
import BrandLogo from './BrandLogo/BrandLogo';
import SearchBar from './SearchBar/SearchBar';
import NavBar from './NavBar/NavBar';
import LoginButton from './LoginButton/LoginButton';

const AppHeader = () => {
  return (
    <header className="Header">
      <Container sticky="top" className="p-2" fluid>
        <Row>
          <Col md={12} lg={3}>
            <BrandLogo />
          </Col>
          <Col md={12} lg={3}>
            <SearchBar />
          </Col>
          <Col md={12} lg={3}>
            <NavBar />
          </Col>
          <Col className="p-2" md={12} lg={3}>
            <LoginButton />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default AppHeader;
