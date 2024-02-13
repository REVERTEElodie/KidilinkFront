import { Navbar, Dropdown, NavItem, NavLink, Nav } from 'react-bootstrap';
import {
  People,
  Folder2Open,
  Diagram3,
  Pencil,
  Plus,
  FolderMinus,
  Images,
  House,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import './Navlogged.scss';

const NavLogged = () => {
  return (
    <div className="Navlogged">
      <div>
        <Navbar>
          <Nav.Link href="#home">
            <Images title="Fil d'actualité" className="fs-2" />
          </Nav.Link>
        </Navbar>
      </div>

      <div>
        <Navbar>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>
              <People title="Gérer les utilisateurs" className="fs-2" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/admin/user">
                  <Plus /> Ajouter un utilisateur
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Pencil /> Modifier un utilisateur
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <FolderMinus /> Supprimer un utilisateur
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
      </div>

      <div>
        <Navbar>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>
              <Folder2Open title="Gérer les albums" className="fs-2" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Plus /> Ajouter un album
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Pencil /> Modifier un album
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <FolderMinus /> Supprimer un album
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
      </div>

      <div>
        <Navbar>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>
              <Diagram3 title="Gérer les classes" className="fs-2" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/admin/classes">
                  <Plus /> Ajouter une classe
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <Pencil /> Modifier un classe
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <FolderMinus /> Supprimer un classe
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
      </div>
      <div>
        <Navbar>
          <Link to="/admin/users">
            <House title="Accueil" className="fs-2" />
          </Link>
        </Navbar>
      </div>
    </div>
  );
};

export default NavLogged;
