/* eslint-disable react/no-unescaped-entities */
import {
  Row,
  Col,
  Card,
  Container,
  ListGroup,
  Badge,
  Button,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Robin from '../../assets/avatars/avatar-robin-developpeur-web-react-php.png';
import Louis from '../../assets/avatars/avatar-louis-developpeur-web-php.png';
import Elodie from '../../assets/avatars/avatar-elodie-developpeur-web-php.png';
import Mehdi from '../../assets/avatars/avatar-mehdi-abakri-developpeur-web-react-php.png';

const About = () => {
  return (
    <div>
      <h1 className="m-5">A propos de nous</h1>
      <Container className="mb-5">
        <h2>La team</h2>
        <Row>
          <Col md={12} lg={3} className="mt-3 mb-3">
            <Card>
              <Card.Img variant="top" src={Robin} />
              <Card.Body>
                <Card.Title>Robin</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="mb-1">
                    Développeur Front
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-1">React</ListGroup.Item>
                  <ListGroup.Item className="mb-1" />
                </ListGroup>
                <Badge pill bg="danger">
                  Scrum Master
                </Badge>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={3} className="mt-3 mb-3">
            <Card>
              <Card.Img variant="top" src={Elodie} />
              <Card.Body>
                <Card.Title>Elodie</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="mb-1">
                    Développeuse Back
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-1">Symfony</ListGroup.Item>
                  <ListGroup.Item className="mb-1" />
                </ListGroup>
                <Badge pill bg="danger">
                  Lead Dev Back
                </Badge>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={3} className="mt-3 mb-3">
            <Card>
              <Card.Img variant="top" src={Louis} />
              <Card.Body>
                <Card.Title>Louis</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="mb-1">
                    Développeur Back
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-1">Symfony</ListGroup.Item>
                  <ListGroup.Item className="mb-1" />
                </ListGroup>
                <Badge pill bg="danger" className="mx-5">
                  Prompt Engineer
                </Badge>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={3} className="mt-3 mb-3">
            <Card>
              <Card.Img variant="top" src={Mehdi} />
              <Card.Body>
                <Card.Title>Mehdi</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="mb-1">
                    Développeur Front
                  </ListGroup.Item>
                  <ListGroup.Item className="mb-1">React</ListGroup.Item>
                  <ListGroup.Item className="mb-1" />
                </ListGroup>
                <Badge pill bg="danger" className="mx-5">
                  Product Owner
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <h2>Le projet</h2>
      <Container className="mb-5">
        <p>
          Permettre aux établissements accueillant des enfants et aux parents de
          communiquer, créer du lien et partager du contenu. Un goûter
          d'anniversaire, une sortie scolaire, des créations hautement
          artistiques, les premières lettres écrites... autant d'événements
          auxquels les parents ne peuvent participer. Heureusement, les
          smartphones sont là mais les plateformes de diffusion... non ! Le but
          du projet est de créer une interface permettant aux établissements
          recevant des enfants de partager des photos et/ou infos à chaque
          parent afin que le lien soit toujours maintenu. Développer une
          application permettant aux jeunes parents (et moins jeunes) de rester
          informés et voir l'évolution de leurs jeunes bambins. Chaque école
          voulant utiliser la solution, aura son espace dédié.
        </p>
        <Link to="/contact">
          <Button variant="secondary" size="l">
            Nous faire coucou
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default About;
