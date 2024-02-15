/* eslint-disable react/no-unescaped-entities */
import { Row, Col } from 'react-bootstrap';

import './Comment.scss';

const Comment = () => {
  return (
    <section>
      <Row className="Photo-comment">
        <div>
          <p className="mb-2 mt-4 text-start ">
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

          <p className="Photo-comment-infos">
            Commentaire posté le 28 FEVRIER 2020 par Loïc Mangeur de rôti
          </p>
        </div>
      </Row>

      <Row className="Photo-comment">
        <div>
          <p className="mb-2 mt-4 text-start ">
            C’est quand même magnifique une armée bien coordonnée, hein! Moi,
            prochaine bataille rangée je reste à Kaamelott. Je suis chef de
            guerre moi, je suis pas là pour secouer des drapeaux et jouer de la
            trompette.
          </p>

          <p className="Photo-comment-infos">
            Commentaire posté le 28 FEVRIER 2020 par Loïc Mangeur de rôti
          </p>
        </div>
      </Row>
    </section>
  );
};

export default Comment;
