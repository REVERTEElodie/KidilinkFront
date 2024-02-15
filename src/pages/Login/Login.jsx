/* eslint-disable react/no-unescaped-entities */
import { Col, Form, Row, Button } from 'react-bootstrap';

import { ArrowDown } from 'react-bootstrap-icons';
import logo from '../../assets/kidiLink_logo_without_background.png';
import './Login.scss';

const Login = () => {
  return (
    <div className="Login m-5">
      <div>
        <img
          src={logo}
          width="20%"
          className="d-inline-block align-top mt-2"
          alt="Kidi' Link logo"
        />
      </div>
      <p className="mb-5 mt-3">
        Merci de vous identifier pour accéder à l'application.
      </p>
      <ArrowDown className="mb-5 fs-2" />
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="loginForm.email">
              <Form.Control type="email" placeholder="super@parents.com" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="loginForm.password">
              <Form.Control type="password" placeholder="super mot de passe" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3 mt-3" controlId="loginForm.submit">
          <Button type="submit" variant="secondary">
            Connexion
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
