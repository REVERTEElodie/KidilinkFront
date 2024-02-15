/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from 'react-bootstrap';
import { PencilFill, Trash3 } from 'react-bootstrap-icons';

import './UserList.scss';

const UserList = () => {
  return (
    <section className="m-5">
      <div className="UserList-section">
        <h3>Les encadrants de votre établissement</h3>
      </div>
      <Container className="UserList-teachers">
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Prénom</p>
        </div>
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Nom</p>
        </div>
        <div className="UserList-class-icon">
          <div>
            <a href="#">
              <PencilFill />
            </a>
          </div>
          <div>
            <a href="#">
              <Trash3 />
            </a>
          </div>
        </div>
      </Container>

      <Container className="UserList-teachers">
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Prénom</p>
        </div>
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Nom</p>
        </div>
        <div className="UserList-class-icon">
          <div>
            <a href="#">
              <PencilFill />
            </a>
          </div>
          <div>
            <a href="#">
              <Trash3 />
            </a>
          </div>
        </div>
      </Container>

      <Container className="UserList-teachers">
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Prénom</p>
        </div>
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Nom</p>
        </div>
        <div className="UserList-class-icon">
          <div>
            <a href="#">
              <PencilFill />
            </a>
          </div>
          <div>
            <a href="#">
              <Trash3 />
            </a>
          </div>
        </div>
      </Container>

      <Container className="UserList-teachers">
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Prénom</p>
        </div>
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Nom</p>
        </div>
        <div className="UserList-class-icon">
          <div>
            <a href="#">
              <PencilFill />
            </a>
          </div>
          <div>
            <a href="#">
              <Trash3 />
            </a>
          </div>
        </div>
      </Container>

      <Container className="UserList-teachers">
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Prénom</p>
        </div>
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Nom</p>
        </div>
        <div className="UserList-class-icon">
          <div>
            <a href="#">
              <PencilFill />
            </a>
          </div>
          <div>
            <a href="#">
              <Trash3 />
            </a>
          </div>
        </div>
      </Container>

      <Container className="UserList-teachers">
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Prénom</p>
        </div>
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Nom</p>
        </div>
        <div className="UserList-class-icon">
          <div>
            <a href="#">
              <PencilFill />
            </a>
          </div>
          <div>
            <a href="#">
              <Trash3 />
            </a>
          </div>
        </div>
      </Container>

      <Container className="UserList-teachers">
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Prénom</p>
        </div>
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Nom</p>
        </div>
        <div className="UserList-class-icon">
          <div>
            <a href="#">
              <PencilFill />
            </a>
          </div>
          <div>
            <a href="#">
              <Trash3 />
            </a>
          </div>
        </div>
      </Container>

      <Container className="UserList-teachers">
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Prénom</p>
        </div>
        <div className="UserList-teachers-list">
          <p className="UserList-teachers-list-item">Nom</p>
        </div>
        <div className="UserList-class-icon">
          <div>
            <a href="#">
              <PencilFill />
            </a>
          </div>
          <div>
            <a href="#">
              <Trash3 />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UserList;
