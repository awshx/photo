import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {render} from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

document.addEventListener('DOMContentLoaded', () => {
    // Composant racine
    const rootComponent = (
        <Router>
          <App />
        </Router>
    );
    // Noeud du DOM
    const node = document.getElementById('root');
    // Rendu
    render(rootComponent, node);
  }); 

serviceWorker.unregister();

