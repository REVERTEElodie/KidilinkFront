/* eslint-disable react/no-unescaped-entities */
import { Container, Image, Row, Col, Button } from 'react-bootstrap';

import Download from '../../assets/Icon-download.svg';

import './Photo.scss';
import Comment from '../Comment/Comment';

const Photo = () => {
  return (
    <Container className="Photo p-4 m-5">
      <h2 className="mb-4">Photo de Prénom </h2>
      <Row>
        <Col>
          <Image
            className="mb-3"
            src="https://picsum.photos/800/600"
            fluid
            alt="aleatoire"
          />
        </Col>
      </Row>

      <Comment />

      <Row className="mt-4">
        <Col>
          <textarea
            className="Photo-area-comment"
            name="addComment"
            id=""
            cols="50"
            rows="10"
            placeholder="Saisir un commentaire"
          />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="secondary" size="sm">
            Commenter
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Photo;
