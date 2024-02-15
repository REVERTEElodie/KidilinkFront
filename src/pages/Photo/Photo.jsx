/* eslint-disable react/no-unescaped-entities */
import { Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PlusCircle } from 'react-bootstrap-icons';

import './Photo.scss';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

const Photo = () => {
  return (
    <Container className="Photo p-4 m-5">
      <h2 className="mb-4">Photo de Prénom </h2>
      <Row>
        <Image
          className="mb-3"
          src="https://picsum.photos/800/600"
          fluid
          alt="aleatoire"
        />
      </Row>
      <div>
        <Link to="#">
          <PlusCircle className="fs-1 m-5" />
        </Link>
      </div>

      <Comment />
      <CommentForm />
    </Container>
  );
};

export default Photo;
