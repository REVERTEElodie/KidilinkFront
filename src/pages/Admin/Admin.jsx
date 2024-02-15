/* eslint-disable jsx-a11y/anchor-is-valid */
import { Row, Col, Container, Button } from 'react-bootstrap';
import { PencilFill, Trash3, PlusCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import Lottie from 'react-lottie';
import anim1 from '../../components/Lotties/anim1.json';

import UserList from '../UserList/UserList';

import './Admin.scss';
import AddPopUp from '../../components/AddPopUp/AddPopUp';

const Admin = () => {
  // Set the Lottie File
  const LottieAnim1 = {
    loop: false,
    autoplay: true,
    animationData: anim1,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <section>
        <h1 className="m-5">Bienvenue John,</h1>

        <div className="Admin-Hero">
          <Lottie options={LottieAnim1} height={400} width={500} />
        </div>
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
        <AddPopUp />
      </section>

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
