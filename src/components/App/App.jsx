import { Route, Routes } from 'react-router-dom';
import FormContact from '../../pages/ContactForm/ContactForm';
import Login from '../../pages/Login/Login';
import AppHeader from '../AppHeader/AppHeader';
import ExamplePage from '../../pages/ExamplePage/ExamplePage';
import AppFooter from '../AppFooter/AppFooter';
import Home from '../../pages/Home/Home';
import Photo from '../../pages/Photo/Photo';
import GraphicalCharter from '../../pages/GraphicalCharter/GraphicalCharter';

import './App.scss';
import About from '../../pages/About/About';
import Admin from '../../pages/Admin/Admin';

function App() {
  return (
    <div className="App">
      <AppHeader />

      {/* <-- Début des routes --> */}
      <Routes>
        {/* <-- Common routes --> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<FormContact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/legal-notice"
          element={<div>page : Mentions légales</div>}
        />

        {/* <-- Users routes --> */}
        <Route path="/admin/users" element={<Admin />} />
        <Route
          path="/user-profil"
          element={<div>page : Profil de l utilisateur</div>}
        />
        <Route
          path="/news-feed"
          element={<div>page : Fils d actus de l utilisateur</div>}
        />

        {/* <-- Classes routes --> */}
        <Route
          path="/admin/classes"
          element={<div>page : Administration des classes</div>}
        />
        <Route path="/classes" element={<div>page : Liste des classes</div>} />
        <Route path="/classe/:id" element={<div>page : Une classe</div>} />

        {/* <-- Albums routes --> */}
        <Route
          path="/admin/albums"
          element={<div>page : Administration des albums</div>}
        />
        <Route path="/albums" element={<div>page : Liste des albums</div>} />
        <Route path="/album/:id" element={<div>page : Un album</div>} />

        {/* <-- Photos routes --> */}
        <Route
          path="/admin/photos"
          element={<div>page : Administration des photos</div>}
        />
        <Route
          path="/photos"
          element={<div>page : Liste des photos d un album</div>}
        />
        <Route path="/photo/:id" element={<Photo />} />

        {/* <-- Devs routes delete before prod --> */}
        <Route path="/graphical-charter" element={<GraphicalCharter />} />
        <Route path="/example-page/:id" element={<ExamplePage />} />

        {/* <-- Errors routes --> */}
        <Route path="*" element={<div>404</div>} />
      </Routes>
      {/* <-- Fin des routes --> */}

      <AppFooter />
    </div>
  );
}

export default App;
