import { Row, Col, Container, Image } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import { Trash3 } from 'react-bootstrap-icons';

import './Admin.scss';

const Admin = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="my-4" md={12} lg={4}>
            <div>
              <span className="Admin-key">15</span>
              <p className="mt-2 fs-3 text-primary">Classes</p>
            </div>
          </Col>
          <Col className="my-4" md={12} lg={4}>
            <div>
              <span className="Admin-key">12</span>
              <p className="mt-2 fs-3 text-primary">Encadrants</p>
            </div>
          </Col>
          <Col className="my-4" md={12} lg={4}>
            <div>
              <span className="Admin-key">95</span>
              <p className="mt-2 fs-3 text-primary">Photos</p>
            </div>
          </Col>
        </Row>
        <Image src="https://picsum.photos/900/200" fluid className="my-5" />
      </Container>
      <div className="Admin-section">
        <h2>Les classes de votre établissement</h2>
      </div>
      <Container>
        <Row>
          <Col className="my-4" md={12} lg={3}>
            <div className="Admin-listClass">
              <span className="Admin-class">Classe 1</span>
            </div>
          </Col>
          <Col className="my-4" md={12} lg={3}>
            <div className="Admin-listClass">
              <span className="Admin-class">Classe 1</span>
            </div>
          </Col>
          <Col className="my-4" md={12} lg={3}>
            <div className="Admin-listClass">
              <span className="Admin-class">Classe 1</span>
            </div>
          </Col>
          <Col className="my-4" md={12} lg={3}>
            <div className="Admin-listClass">
              <span className="Admin-class">Classe 1</span>
              <div className="Admin-class-icon">
                <PencilFill />
                <Trash3 />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
