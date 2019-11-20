import React from 'react';

//sass
import './Hero.scss';

//Imagens
import HeroDesktop from '../../assets/imagens/heros/hero-home-desktop.jpg';

class Hero extends React.Component {

	render() {

		return (

			<div className='hero'>
        <div className="hero__imagem">
          <img src={HeroDesktop} alt="Hero Crossfit" />
        </div>
        <div className="container container--max">
          <div className="hero__conteudo">
            <h1>Crossfit em Guarulhos</h1>
            <h2>Primeiro box de Crossfit em Guarulhos. Treine com os melhores.</h2>
          </div>
        </div>
			</div>

    );

	}

}
export default Hero;