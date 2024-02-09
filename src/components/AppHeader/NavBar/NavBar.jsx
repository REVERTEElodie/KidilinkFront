import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

const NavBar = () => {
  return (
    <Navbar className="justify-content-center">
      <Nav>
        <Nav.Item>
          <NavLink className="NavLink" to="/about">
            A propos
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="NavLink" to="/contact">
            Contact
          </NavLink>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
