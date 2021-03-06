import React from 'react';
import { Link } from "react-router-dom";
//sass
import './Header.scss';
//Imagens
import Logo from '../../assets/imagens/logo.png';
import whats from '../../assets/imagens/whats.svg';
import whatsMobile from '../../assets/imagens/whats-mobile.svg';

class Home extends React.Component {

	constructor() {
		super()
		this.state = {
			isMobile : '',
			logoShow: 'logo logo--show'
    };
	}
	handleScroll() {
    if (document.documentElement.scrollTop > 130) {
			this.setState({
				logoShow: 'logo logo--hide'
			})
    } else {
			this.setState({
				logoShow: 'logo logo--show'
			})
		}
   }
	componentDidMount() {
		window.onscroll = () => this.handleScroll()
	}
	render() {
		if (window.innerWidth < 768 ) {
			this.state.isMobile = true;
		} else {
			this.state.isMobile = false;
		}
		return (

      <header className="header">
				<div className="container container--max header__container">

					<div className="logo" style={ document.documentElement.scrollTop > 130 ? { opacity: 0} : {}}>
						<Link to='/'>
							<img src={ Logo } alt="Crossfit em Guarulhos - Logo MK1" />
						</Link>
					</div>
					{ this.state.isMobile ? (
						<div className="container-agende-mobile">
							<Link className="botao-agende" to={`${process.env.PUBLIC_URL}/aula-de-crossfit`}>AGENDE UMA AULA EXPERIMENTAL</Link>
							<a target="_blank" className="botao-whats" href="https://api.whatsapp.com/send?phone=5511930229182">
								<img src={ whatsMobile } alt="Whats App MK1" />
							</a>
						</div>
					) : (
						<div className="container-agende-desktop">
							<Link className="btn btn-primary btn-sm btn-primary--sombra" to={`${process.env.PUBLIC_URL}/aula-de-crossfit`}>AGENDE UMA AULA EXPERIMENTAL</Link>
							<a target="_blank" className="botao-whats" href="https://api.whatsapp.com/send?phone=5511930229182">
								<img className="btn-primary--sombra" src={ whats } alt="Whats App MK1" />
							</a>
						</div>
					) }

				</div>
			</header>

    );

	}

}
export default Home;