import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//Páginas
import Home from "./paginas/Home/Home";
import AulaExperimental from "./paginas/AulaExperimental/AulaExperimental";
//Sass
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div className="wrapper">
    <Router>
      <Route exact path={`${process.env.PUBLIC_URL}/`}  component={ Home } />
      <Route exact path={`${process.env.PUBLIC_URL}/aula-de-crossfit`}  component={ AulaExperimental } />
    </Router>
  </div> , document.getElementById('root'));

serviceWorker.unregister();