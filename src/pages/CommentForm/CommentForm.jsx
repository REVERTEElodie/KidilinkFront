import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Button, Form } from 'react-bootstrap';

import {
  changeCommentField,
  submitCommentForm,
} from '../../actions/CommentForm';

import './CommentForm.scss';

const CommentForm = () => {
  const comment = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const onFieldChange = (event) => {
    const action = changeCommentField(event.target.value, event.target.name);
    dispatch(action);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(submitCommentForm());
  };

  return (
    <>
      <h2>Ajouter un commentaire</h2>
      <div className="Commentaire">
        <Form onSubmit={onSubmit}>
          <Row className="mt-4">
            <Col>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                name="comment"
                placeholder="Votre commentaire"
                value={comment}
                onChange={onFieldChange}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Button variant="secondary" size="sm">
                Envoyer
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default CommentForm;
