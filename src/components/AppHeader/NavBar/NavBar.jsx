import { Navbar, Nav } from 'react-bootstrap';

import './NavBar.scss';

const NavBar = () => {
  return (
    <Navbar className="justify-content-center">
      <Nav>
        <Nav.Item>
          <Nav.Link href="#aPropos">A propos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
