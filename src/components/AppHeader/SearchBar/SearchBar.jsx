import { Navbar, InputGroup, Form, Button } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

const SearchBar = () => {
  return (
    <div>
      <Navbar>
        <InputGroup className="mb-2">
          <Form.Control
            placeholder="Rechercher ..."
            aria-label="Rechercher"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <Search />
          </Button>
        </InputGroup>
      </Navbar>
    </div>
  );
};

export default SearchBar;
