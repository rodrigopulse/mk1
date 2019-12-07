import React from 'react';
import { Helmet } from "react-helmet";

//sass
import './Home.scss';

//core
import Header from '../../core/Header/Header';
import Footer from '../../core/Footer/Footer';

//componentes
import Hero from '../../componentes/Hero/Hero';
import Pilares from '../../componentes/Pilares/Pilares';
import Chamada from '../../componentes/Chamada/Chamada';
import GaleriaFotos from '../../componentes/GaleriaFotos/GaleriaFotos'
import Grade from '../../componentes/Grade/Grade'

class Home extends React.Component {

	render() {

		return (

			<div className='container container-home'>
        <Helmet>
						<meta charSet="utf-8" />
						<title>Crossfit em Guarulhos - MK1</title>
						<meta name="description" content="Primeiro box de Crossfit em Guarulhos. Treine com os melhores profissionais certificados e habilitados a ministrar aulas de Crossfit na MK-1." />
				</Helmet>
				<Header />
				<Hero />
				<Pilares />
				<Chamada />
				<GaleriaFotos />
				<Grade />
				<Footer />
			</div>

    );

	}

}
export default Home;