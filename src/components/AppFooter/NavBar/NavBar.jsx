import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  return (
    <Nav className="Footer-col">
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
      <Link to="/legal-notice">Mentions légales</Link>
      <Link to="/contact">Contact</Link>
    </Nav>
  );
};

export default NavBar;
