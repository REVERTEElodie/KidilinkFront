/* eslint-disable react/no-unescaped-entities */
import { Col, Form, Row } from 'react-bootstrap';

const FormContact = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" placeholder="Alvan" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Cardin" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Form.Label>Vous souhaitez :</Form.Label>
        <Form.Select>
          <option>...</option>
          <option>Contacter l'équipe</option>
          <option>Souscrire pour mon établissement</option>
          <option>Vous connecter mais cela ne fonctionne pas</option>
          <option>Soumettre une suggestion d'amélioration</option>
        </Form.Select>
      </Row>
    </Form>
  );
};

export default FormContact;
