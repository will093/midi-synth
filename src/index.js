import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'normalize.css/normalize.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import unregister from './registerServiceWorker';

// Unregister service worker.
unregister();

ReactDOM.render(<App />, document.getElementById('root'));
