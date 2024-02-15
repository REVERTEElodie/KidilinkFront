import { Nav } from 'react-bootstrap';

import './NavBar.scss';

const NavBar = () => {
  return (
    <Nav className="flex-column">
      <Nav.Link href="/">Accueil</Nav.Link>
      <Nav.Link href="/about">A propos</Nav.Link>
      <Nav.Link href="/legal-notice">Mentions légales</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
  );
};

export default NavBar;
