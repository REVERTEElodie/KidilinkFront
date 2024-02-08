/* eslint-disable react/no-unescaped-entities */
import { Container, Image, Row, Col, Button } from 'react-bootstrap';

import Download from '../../assets/Icon-download.svg';

import './Photo.scss';

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

      <Row className="mb-5">
        <Col className="text-start">
          <p className="fs-4">Titre super de la super photo</p>
        </Col>
        <Col className="text-end">
          <img
            src={Download}
            width="28"
            height="28"
            className="d-inline-block align-top"
            alt="download"
          />
        </Col>
      </Row>

      <Row className="mb-2 mt-4">
        <Col className="text-start">
          <p>Commentaire posté le 28 FEVRIER 2020 par Loïc Mangeur de rôti</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="Photo-comment">
            Ben c’est bien ce que j’ai dit! Provençal le Gaulois… le Galois…
            Ouais je vois ce que vous voulez dire… C’est une tarte aux
            myrtilles. Pourquoi elle vous revient pas? J’ai envie d’faire des
            tartes, voilà! Vous n’allez pas m’obliger à m’justifier! Mais bien
            sûr, comme ça au lieu de confondre les signes, ils auraient confondu
            les couleurs! Ils sont encore là, ces cons! Et on peut savoir depuis
            quand vous arpentez la Bretagne en racontant à tout le monde que
            vous vous appelez Provençal le Gaulois? La vache! Ca vous rend pas
            aimable en tout cas, hein! C’est meilleur chaud, hein. Seulement là
            aux cuisines ils sont sur le repas du soir. Hein, ils ont pas trop
            le temps. Ah, ben tourné vers là-bas c'est sûr, moi non plus je vois
            rien.
          </p>
        </Col>
      </Row>
      <Row className="mb-2 mt-4">
        <Col className="text-start">
          <p>Commentaire posté le 28 FEVRIER 2020 par Loïc Mangeur de rôti</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="Photo-comment">
            C’est quand même magnifique une armée bien coordonnée, hein! Moi,
            prochaine bataille rangée je reste à Kaamelott. Je suis chef de
            guerre moi, je suis pas là pour secouer des drapeaux et jouer de la
            trompette.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <textarea
            className="Photo-area-comment"
            name="addComment"
            id=""
            cols= "50"
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
