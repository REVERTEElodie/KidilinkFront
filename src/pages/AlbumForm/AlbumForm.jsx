import { useSelector, useDispatch } from 'react-redux';

/* eslint-disable react/no-unescaped-entities */
import { Col, Form, Row, Button } from 'react-bootstrap';

import { changeAlbumField, submitAlbumForm } from '../../actions/AlbumForm';

import './AlbumForm.scss';

const AlbumForm = () => {
  const albumNameValue = useSelector((state) => state.albumName);
  const descriptionValue = useSelector((state) => state.description);
  const dispatch = useDispatch();

  const onFieldChange = (event) => {
    const action = changeAlbumField(event.target.value, event.target.name);
    dispatch(action);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(submitAlbumForm());
  };

  return (
    <>
      <h2>Ajout d'un album</h2>
      <div className="Album">
        <Form onSubmit={onSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="classeForm.classename">
                <Form.Label>Nom de l'album</Form.Label>
                <Form.Control
                  type="text"
                  name="albumName"
                  placeholder="Identifiant de la classe"
                  value={albumNameValue}
                  onChange={onFieldChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="classeForm.sessionof">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  placeholder="Description de l'album"
                  value={descriptionValue}
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

export default AlbumForm;
