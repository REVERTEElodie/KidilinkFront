import { useSelector, useDispatch } from 'react-redux';

/* eslint-disable react/no-unescaped-entities */
import { Col, Form, Row, Button } from 'react-bootstrap';

import { changeUserField, submitUserForm } from '../../actions/addUserForm';

import './AddUserForm.scss';

const AddUserForm = () => {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const emailValue = useSelector((state) => state.email);
  const userRole = useSelector((state) => state.userRole);
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
      <div className="Contact">
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="contactForm.firstname">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="Votre prénom"
                  value={firstName}
                  onChange={onFieldChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="contactForm.lastname">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Votre nom"
                  value={lastName}
                  onChange={onFieldChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="contactForm.email">
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
              <Form.Label>Rôle de l'utilisateur :</Form.Label>
              <Form.Select
                name="userRole"
                value={userRole}
                onChange={onFieldChange}
              >
                <option>...</option>
                <option>Parent-e</option>
                <option>Encadrant-e</option>
                <option>Directeir-trice</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-3 mt-3" controlId="contactForm.submit">
            <Button type="submit" variant="secondary">
              Envoyer
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default AddUserForm;
