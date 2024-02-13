/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Col, Container, Image } from 'react-bootstrap';
import { PencilFill, Trash3, PlusCircle } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';
import UserList from '../../components/UserList/UserList';

import './Admin.scss';

const Admin = () => {
  return (
    <>
      <section>
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
                <div className="Admin-class-icon">
                  <div>
                    <a href="#">
                      <PencilFill />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <Trash3 />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="my-4" md={12} lg={3}>
              <div className="Admin-listClass">
                <span className="Admin-class">Classe 1</span>
                <div className="Admin-class-icon">
                  <div>
                    <a href="#">
                      <PencilFill />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <Trash3 />
                    </a>
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col className="my-4" md={12} lg={3}>
              <div className="Admin-listClass">
                <span className="Admin-class">Classe 1</span>
                <div className="Admin-class-icon">
                  <div>
                    <a href="#">
                      <PencilFill />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <Trash3 />
                    </a>
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col className="my-4" md={12} lg={3}>
              <div className="Admin-listClass">
                <span className="Admin-class">Classe 1</span>
                <div className="Admin-class-icon">
                  <div>
                    <a href="#">
                      <PencilFill />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <Trash3 />
                    </a>
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col className="my-4" md={12} lg={3}>
              <div className="Admin-listClass">
                <span className="Admin-class">Classe 1</span>
                <div className="Admin-class-icon">
                  <div>
                    <a href="#">
                      <PencilFill />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <Trash3 />
                    </a>
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col className="my-4" md={12} lg={3}>
              <div className="Admin-listClass">
                <span className="Admin-class">Classe 1</span>
                <div className="Admin-class-icon">
                  <div>
                    <a href="#">
                      <PencilFill />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <Trash3 />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="my-4" md={12} lg={3}>
              <div className="Admin-listClass">
                <span className="Admin-class">Classe 1</span>
                <div className="Admin-class-icon">
                  <div>
                    <a href="#">
                      <PencilFill />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <Trash3 />
                    </a>
                  </div>
                </div>
              </div>
            </Col>{' '}
            <Col className="my-4" md={12} lg={3}>
              <div className="Admin-listClass">
                <span className="Admin-class">Classe 1</span>
                <div className="Admin-class-icon">
                  <div>
                    <a href="#">
                      <PencilFill />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <Trash3 />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div>
          <PlusCircle className="fs-1 m-5" />
        </div>
      </section>

      <Image src="https://picsum.photos/900/200" fluid className="my-5" />

      <UserList />

      <div>
        <Link to="/admin/user">
          <PlusCircle className="fs-1 m-5" />
        </Link>
      </div>
    </>
  );
};

export default Admin;
