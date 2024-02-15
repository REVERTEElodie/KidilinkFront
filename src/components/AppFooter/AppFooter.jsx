import { Col, Container, Row } from 'react-bootstrap';

import './AppFooter.scss';
import BrandLogo from './BrandLogo/BrandLogo';
import NavBar from './NavBar/NavBar';
import SocialMedia from './SocialMedia/SocialMedia';
import ContactButton from './ContactButton/ContactButton';

const AppFooter = () => {
  return (
    <footer className="Footer">
      <Container fluid>
        <Row>
          <Col md={12} lg={4}>
            <NavBar />
          </Col>
          <Col md={12} lg={4}>
            <BrandLogo />
          </Col>
          <Col md={12} lg={4}>
            <div className="Footer-col">
              <ContactButton />
              <SocialMedia />
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
