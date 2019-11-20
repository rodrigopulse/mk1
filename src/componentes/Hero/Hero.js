import React from 'react';

//sass
import './Hero.scss';

//Imagens
import HeroDesktop from '../../assets/imagens/heros/hero-home-desktop.jpg';
import HeroMobile from '../../assets/imagens/heros/hero-home-mobile.jpg';

class Hero extends React.Component {
  constructor() {
    super()
    this.state = {isMobile: ''}
  }
	render() {
    if (window.innerWidth < 768 ) {
			this.state.isMobile = true;
		} else {
			this.state.isMobile = false;
		}
		return (

			<div className='hero'>
        <div className="hero__imagem">
          { this.state.isMobile ? (
            <img src={ HeroMobile } alt="Hero Crossfit" />
          ) : (
            <img src={ HeroDesktop } alt="Hero Crossfit" />
          )}
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