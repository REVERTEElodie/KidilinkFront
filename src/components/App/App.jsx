import AppHeader from '../AppHeader/AppHeader';
import MainContainer from '../MainContainer/MainContainer';
import AppFooter from '../AppFooter/AppFooter';

import './App.scss';
import FormContact from '../ContactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <MainContainer />
      <FormContact />
      <AppFooter />
    </div>
  );
}

export default App;
