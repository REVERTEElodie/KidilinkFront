import { useSelector, useDispatch } from 'react-redux';

/* eslint-disable react/no-unescaped-entities */
import { Col, Form, Row, Button } from 'react-bootstrap';

import { changeClasseField, submitClasseForm } from '../../actions/ClasseForm';

import './ClasseForm.scss';

const ClasseForm = () => {
  const classeNameValue = useSelector((state) => state.classeName);
  const sessionOfValue = useSelector((state) => state.sessionOf);
  const dispatch = useDispatch();

  const onFieldChange = (event) => {
    const action = changeClasseField(event.target.value, event.target.name);
    dispatch(action);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(submitClasseForm());
  };

  return (
    <>
      <h2>Ajout d'une classe</h2>
      <div className="Classe">
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="classeForm.classename">
                <Form.Label>Nom de la classe</Form.Label>
                <Form.Control
                  type="text"
                  name="classeName"
                  placeholder="Identifiant de la classe"
                  value={classeNameValue}
                  onChange={onFieldChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="classeForm.sessionof">
                <Form.Label>Session</Form.Label>
                <Form.Control
                  type="text"
                  name="sessionOf"
                  placeholder="Année scolaire"
                  value={sessionOfValue}
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
    </>
  );
};

export default ClasseForm;
