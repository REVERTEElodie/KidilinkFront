import { useSelector, useDispatch } from 'react-redux';

/* eslint-disable react/no-unescaped-entities */
import { Col, Form, Row, Button, InputGroup } from 'react-bootstrap';

import { changeUserField, submitUserForm } from '../../actions/UserForm';

import './UserForm.scss';
import UserList from '../UserList/UserList';

const UserForm = () => {
  const firstNameValue = useSelector((state) => state.firstName);
  const lastNameValue = useSelector((state) => state.lastName);
  const emailValue = useSelector((state) => state.email);
  const passwordValue = useSelector((state) => state.password);
  const userRoleValue = useSelector((state) => state.userRole);
  const dispatch = useDispatch();

  const onFieldChange = (event) => {
    const action = changeUserField(event.target.value, event.target.name);
    dispatch(action);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(submitUserForm());
  };

  return (
    <>
      <h2>Ajout d'un utilisateur</h2>
      <div className="User">
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="userForm.userRole">
                <Form.Label>Rôle de l'utilisateur :</Form.Label>
                <Form.Select
                  name="userRole"
                  value={userRoleValue}
                  onChange={onFieldChange}
                >
                  <option>...</option>
                  <option>Parent-e</option>
                  <option>Encadrant-e</option>
                  <option>Directeur-trice</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="userForm.firstname">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Votre prénom"
                  value={firstNameValue}
                  onChange={onFieldChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="userForm.lastname">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Votre nom"
                  value={lastNameValue}
                  onChange={onFieldChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="userForm.email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="super@parents.com"
                  value={emailValue}
                  onChange={onFieldChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="userForm.password">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="super mot de passe"
                  value={passwordValue}
                  onChange={onFieldChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3 mt-3" controlId="userForm.submit">
            <Button type="submit" variant="secondary">
              Envoyer
            </Button>
          </Form.Group>
        </Form>
      </div>

      <UserList />
    </>
  );
};

export default UserForm;
