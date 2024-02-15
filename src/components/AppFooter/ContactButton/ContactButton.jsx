import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ContactButton.scss';

const ContactButton = () => {
  return (
    <div>
      <Link to="/contact">
        <Button variant="secondary" size="sm">
          Nous écrire
        </Button>
      </Link>
    </div>
  );
};

export default ContactButton;
