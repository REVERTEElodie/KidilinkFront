import { Route, Routes } from 'react-router-dom';
import FormContact from '../../pages/ContactForm/ContactForm';
import Login from '../../pages/Login/Login';
import AppHeader from '../AppHeader/AppHeader';
import MainContainer from '../../pages/MainContainer/MainContainer';
import ExamplePage from '../../pages/ExamplePage/ExamplePage';
import AppFooter from '../AppFooter/AppFooter';

import './App.scss';
import Photo from '../../pages/Photo/Photo';

function App() {
  return (
    <div className="App">
      <AppHeader />

      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/contact" element={<FormContact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/example-page/:id" element={<ExamplePage />} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/photo" element={<Photo />} />
      </Routes>

      <AppFooter />
    </div>
  );
}

export default App;
