import { Navbar, NavDropdown } from 'react-bootstrap';
import {
  People,
  Folder2Open,
  Diagram3,
  Pencil,
  Plus,
  PersonDash,
  FolderMinus,
  Trash,
} from 'react-bootstrap-icons';

import './Navlogged.scss';

const NavLogged = () => {
  return (
    <div className="Navlogged">
      <div>
        <Navbar>
          <Navbar.Brand href="#home" />
          <People className="fs-2" />
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <Plus /> Ajouter un encadrant
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              <Pencil /> Modifier un encadrant
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              <PersonDash /> Supprimer un encadrant
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </div>
      <div>
        <Navbar>
          <Navbar.Brand href="#home" />
          <Folder2Open className="fs-2" />
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <Plus /> Ajouter un album
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              <Pencil /> Modifier un album
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              <FolderMinus /> Supprimer un album
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </div>
      <div>
        <Navbar>
          <Navbar.Brand href="#home" />
          <Diagram3 className="fs-2" />
          <NavDropdown id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <Plus /> Ajouter une classe
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              <Pencil /> Modifier une classe
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              <Trash /> Supprimer une classe
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      </div>
    </div>
  );
};

export default NavLogged;
