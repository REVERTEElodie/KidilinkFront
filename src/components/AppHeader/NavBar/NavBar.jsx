import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './NavBar.scss';
import NavLogged from '../NavLogged/NavLogged';

const NavBar = () => {
  const logged = useSelector((state) => state.user.logged);
  console.log(logged);

  return (
    <div>
      {logged ? (
        <NavLogged />
      ) : (
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
      )}
    </div>
  );
};

export default NavBar;
