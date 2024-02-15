import { Link } from 'react-router-dom';

import logo from '../../../assets/kidiLink_logo_without_background.png';

import './BrandLogo.scss';

const BrandLogo = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="Kidi' Link logo"
      />
    </Link>
  );
};

export default BrandLogo;
