import AppHeader from '../AppHeader/AppHeader';
import MainContainer from '../MainContainer/MainContainer';
import AppFooter from '../AppFooter/AppFooter';

import './App.scss';
import FormContact from '../ContactForm/ContactForm';
import Login from '../Login/Login';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <MainContainer />
      <FormContact />
      <Login />
      <AppFooter />
    </div>
  );
}

export default App;
