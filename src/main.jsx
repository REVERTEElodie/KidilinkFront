import React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Icon from 'react-bootstrap-icons';
import App from './components/App/App';

import './custom-bootstrap.scss';
import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(<App />);
