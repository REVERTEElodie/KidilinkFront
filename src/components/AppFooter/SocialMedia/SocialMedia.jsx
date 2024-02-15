import { Nav } from 'react-bootstrap';

import facebookLogo from '../../../assets/socialMedia/facebook.svg';
import instaLogo from '../../../assets/socialMedia/instagram.svg';
import linkedinLogo from '../../../assets/socialMedia/linkedin.svg';
import twitter_xLogo from '../../../assets/socialMedia/twitter-x.svg';

import './SocialMedia.scss';

const SocialMedia = () => {
  return (
    <div className="Footer-col">
      <h5>Restez connectés</h5>
      <div>
        <Nav className="flex-row">
          <Nav.Link href="#home">
            <img
              src={facebookLogo}
              width="28"
              height="28"
              className="d-inline-block align-top Footer-svg"
              alt="Facebook logo"
            />
          </Nav.Link>
          <Nav.Link href="#home">
            {' '}
            <img
              src={instaLogo}
              width="28"
              height="28"
              className="d-inline-block align-top"
              alt="Instagram logo"
            />
          </Nav.Link>
          <Nav.Link href="#home">
            {' '}
            <img
              src={linkedinLogo}
              width="28"
              height="28"
              className="d-inline-block align-top"
              alt="Linked'In logo"
            />
          </Nav.Link>
          <Nav.Link href="#home">
            {' '}
            <img
              src={twitter_xLogo}
              width="28"
              height="28"
              className="d-inline-block align-top"
              alt="Twitter / X logo"
            />
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default SocialMedia;
