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
import whats from '../../assets/imagens/whats.svg';

class Home extends React.Component {

	render() {

		return (

      <header className="header">
				<div className="container container--max header__container">
					<div className="logo">
						<img src={ Logo } alt="Crossfit em Guarulhos - Logo MK1" />
					</div>
					<div className="container-agende">
						<Link className="btn btn-primary btn-sm btn-primary--sombra" to="/aula-cross-fit">AGENDE UMA AULA EXPERIMENTAL</Link>
						<a target="_blank" className="botao-whats" href="https://api.whatsapp.com/send?phone=5511930229182">
							<img className="btn-primary--sombra" src={ whats } alt="Whats App MK1" />
						</a>
					</div>
				</div>				
			</header>

    );

	}

}
export default Home;