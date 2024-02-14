import { useState } from 'react';
import { PlusCircle } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './AddPopUp.scss';
import ClasseForm from '../../pages/ClasseForm/ClasseForm';

const AddPopUp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <PlusCircle onClick={handleShow} className="fs-1 m-5 AddPopUp-btn" />
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une classe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {' '}
          <ClasseForm />{' '}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Annuler
          </Button>
          <Button type="submit" variant="success" onClick={handleClose}>
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPopUp;
