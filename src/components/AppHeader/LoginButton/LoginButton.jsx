import { Button } from 'react-bootstrap';

import './LoginButton.scss';

const LoginButton = () => {
  return (
    <Button href="/login" variant="secondary" size="sm">
      Connexion
    </Button>
  );
};

export default LoginButton;
