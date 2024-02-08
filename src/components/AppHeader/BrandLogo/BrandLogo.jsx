import { Navbar } from 'react-bootstrap';

import logo from '../../../assets/kidiLink_logo_without_background.png';

import './BrandLogo.scss';

const BrandLogo = () => {
  return (
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="60"
        height="60"
        className="d-inline-block align-top"
        alt="Kidi' Link logo"
      />
    </Navbar.Brand>
  );
};

export default BrandLogo;
