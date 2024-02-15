import { useSelector, useDispatch } from 'react-redux';

/* eslint-disable react/no-unescaped-entities */
import { Col, Form, Row, Button } from 'react-bootstrap';

import {
  changeContactField,
  submitContactForm,
} from '../../actions/contactForm';

import './ContactForm.scss';

const FormContact = () => {
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const emailValue = useSelector((state) => state.email);
  const selectObject = useSelector((state) => state.selectObject);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onFieldChange = (event) => {
    const action = changeContactField(event.target.value, event.target.name);
    dispatch(action);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(submitContactForm());
  };

  return (
    <>
      <h2>Formulaire de contact</h2>
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
              <Form.Label>Vous souhaitez :</Form.Label>
              <Form.Select
                name="selectObject"
                value={selectObject}
                onChange={onFieldChange}
              >
                <option>...</option>
                <option>Contacter l'équipe</option>
                <option>Souscrire pour mon établissement</option>
                <option>Vous connecter mais cela ne fonctionne pas</option>
                <option>Soumettre une suggestion d'amélioration</option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="contactForm.message">
                <Form.Label>Votre message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  type="text"
                  name="message"
                  placeholder="Votre message"
                  value={message}
                  onChange={onFieldChange}
                />
              </Form.Group>
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

export default FormContact;
