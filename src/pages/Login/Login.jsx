import { useSelector, useDispatch } from 'react-redux';

/* eslint-disable react/no-unescaped-entities */
import { Col, Form, Row, Button, InputGroup } from 'react-bootstrap';

import { ArrowDown } from 'react-bootstrap-icons';
import logo from '../../assets/kidiLink_logo_without_background.png';
import './Login.scss';
import { changeLoginField, submitLogin } from '../../actions/user';

const Login = () => {
  const emailValue = useSelector((state) => state.email);
  const passwordValue = useSelector((state) => state.password);
  const dispatch = useDispatch();

  const onFieldChange = (event) => {
    const action = changeLoginField(event.target.value, event.target.name);
    dispatch(action);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(submitLogin());
  };

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
      <Form onSubmit={onSubmit}>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <Form.Control
                type="email"
                name="email"
                placeholder="super@parents.com"
                value={emailValue}
                onChange={onFieldChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <Form.Control
                type="password"
                name="password"
                placeholder="super mot de passe"
                value={passwordValue}
                onChange={onFieldChange}
              />
            </InputGroup>
          </Col>
        </Row>
        <Form.Group className="mb-3 mt-3">
          <Button type="submit" variant="secondary">
            Connexion
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
