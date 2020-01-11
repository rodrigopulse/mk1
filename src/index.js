import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  ReactRouter
} from 'react-router-dom';
import TagManager from 'react-gtm-module';

//Sass
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

//Páginas
import Home from "./paginas/Home/Home";
import AulaExperimental from "./paginas/AulaExperimental/AulaExperimental";

import * as serviceWorker from './serviceWorker';

const tagManagerArgs = {
  gtmId: 'GTM-TVSHSFW'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.render(
  <div className="wrapper">
    <Router history={ReactRouter.hashHistory}>
      <Route exact path={`${process.env.PUBLIC_URL}/`}  component={ Home } />
      <Route exact path={`${process.env.PUBLIC_URL}/aula-de-crossfit`}  component={ AulaExperimental } />
    </Router>
  </div> , document.getElementById('root'));

serviceWorker.unregister();