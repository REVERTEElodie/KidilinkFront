import { Button } from 'react-bootstrap';

import './ContactButton.scss';

const ContactButton = () => {
  return (
    <Button href="/contact" variant="secondary" size="sm">
      Nous écrire
    </Button>
  );
};

export default ContactButton;
