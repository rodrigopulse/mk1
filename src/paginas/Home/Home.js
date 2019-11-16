import React from 'react';
import { Helmet } from "react-helmet";

//sass
import './Home.scss';
//Template Partes
import Header from '../../template_partes/Header/Header';

class Home extends React.Component {

	render() {

		return (

			<div className='container container-home'>
        <Helmet>
						<meta charSet="utf-8" />
						<title>Crossfit em Guarulhos - MK1</title>
						<meta name="description" content="Primeiro box de Crossfit em Guarulhos. Treine com os melhores. Faça uma aula exprimental e entre para o Mundo do Crossfit." />
				</Helmet>
				<Header />
			</div>

    );

	}

}
export default Home;