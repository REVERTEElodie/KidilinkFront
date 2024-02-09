import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import facebookLogo from '../../../assets/socialMedia/facebook.svg';
import instaLogo from '../../../assets/socialMedia/instagram.svg';
import linkedinLogo from '../../../assets/socialMedia/linkedin.svg';
import twitter_xLogo from '../../../assets/socialMedia/twitter-x.svg';

import './SocialMedia.scss';

const SocialMedia = () => {
  return (
    <div>
      <h5>Restez connectés</h5>
      <div>
        <Nav className="flex-row">
          <Link
            className="SocialMediaLink"
            to="https://www.facebook.com/"
            target="new"
          >
            <img
              src={facebookLogo}
              width="28"
              height="28"
              className="d-inline-block align-top Footer-svg"
              alt="Facebook logo"
              target="_blank"
            />
          </Link>
          <Link
            className="SocialMediaLink"
            to="https://www.instagram.com/"
            target="new"
          >
            <img
              src={instaLogo}
              width="28"
              height="28"
              className="d-inline-block align-top"
              alt="Instagram logo"
            />
          </Link>
          <Link
            className="SocialMediaLink"
            to="https://www.linkedin.com/"
            target="new"
          >
            <img
              src={linkedinLogo}
              width="28"
              height="28"
              className="d-inline-block align-top"
              alt="Linked'In logo"
            />
          </Link>
          <Link
            className="SocialMediaLink"
            to="https://twitter.com/"
            target="new"
          >
            <img
              src={twitter_xLogo}
              width="28"
              height="28"
              className="d-inline-block align-top"
              alt="Twitter / X logo"
            />
          </Link>
        </Nav>
      </div>
    </div>
  );
};

export default SocialMedia;
