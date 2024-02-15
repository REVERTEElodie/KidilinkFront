import { Link } from 'react-router-dom';

import logo from '../../../assets/kidiLink_logo_without_background.png';

import './BrandLogo.scss';

const BrandLogo = () => {
  return (
    <div className="Footer-col justify-content-center">
      <Link to="/">
        <img
          src={logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Kidi' Link logo"
        />
      </Link>
    </div>
  );
};

export default BrandLogo;
