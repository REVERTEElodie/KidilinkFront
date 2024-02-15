import { Navbar } from 'react-bootstrap';

import logo from '../../../assets/kidiLink_logo_without_background.png';

import './BrandLogo.scss';

const BrandLogo = () => {
  return (
    <Navbar className="justify-content-center">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt="Kidi' Link logo"
        />
      </Navbar.Brand>
    </Navbar>
  );
};

export default BrandLogo;
