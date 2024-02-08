/* eslint-disable react/no-unescaped-entities */
import { Col, Form, Row, Button } from 'react-bootstrap';

import './ContactForm.scss';

const FormContact = () => {
  return (
    <>
      <h2>Formulaire de contact</h2>
      <div className="Contact">
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="contactForm.firstname">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Alvan" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="contactForm.lastname">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Cardin" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="contactForm.email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Vous souhaitez :</Form.Label>
              <Form.Select>
                <option>...</option>
                <option>Contacter l'équipe</option>
                <option>Souscrire pour mon établissement</option>
                <option>Vous connecter mais cela ne fonctionne pas</option>
                <option>Soumettre une suggestion d'amélioration</option>
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

export default FormContact;
