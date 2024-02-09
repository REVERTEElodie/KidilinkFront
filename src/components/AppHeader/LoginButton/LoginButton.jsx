import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './LoginButton.scss';

const LoginButton = () => {
  return (
    <div>
      <Link to="/login">
        <Button variant="secondary" size="sm">
          Connexion
        </Button>
      </Link>
    </div>
  );
};

export default LoginButton;
