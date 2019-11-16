import React from 'react';
import { Helmet } from "react-helmet";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
//sass
import './Header.scss';
//Imagens
import Logo from '../../assets/imagens/logo.png'; 

class Home extends React.Component {

	render() {

		return (

      <header className="header">
				<div className="container container--max header__container">
					<div className="logo">
						<img src={ Logo } alt="Crossfit em Guarulhos - Logo MK1" />
					</div>
				</div>
				<div className="container-agende"></div>
			</header>

    );

	}

}
export default Home;