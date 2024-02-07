import logo from '../../assets/logo.svg';

import './App.scss';
import FormContact from '../ContactForm/ContactForm';
import Login from '../Login/Login';
import AppHeader from '../AppHeader/AppHeader';
import MainContainer from '../MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <MainContainer />
      <FormContact />
      <Login />
    </div>
  );
}

export default App;
