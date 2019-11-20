import React from 'react';
//sass
import './Pilares.scss';
//imagens
import iconeFisico from '../../assets/imagens/pilares/fisico.svg';
import ginastica from '../../assets/imagens/pilares/ginastica.svg';
import peso from '../../assets/imagens/pilares/peso.svg';
import esporte from '../../assets/imagens/pilares/esporte.svg';

class Pilares extends React.Component {
  render() {
    return (
      <div className="pilares">
        <div className="container container--max pilares__container">
          <div className="pilares__item">
            <img src={ iconeFisico } alt="Condicionamento Físico" />
            <h3 className="pilares__titulos">Condicionamento Físico</h3>
          </div>
          <div className="pilares__item">
            <img src={ ginastica } alt="Ginástica" />
            <h3 className="pilares__titulos">Ginástica</h3>
          </div>
          <div className="pilares__item">
            <img src={ peso } alt="Levantamento De Peso" />
            <h3 className="pilares__titulos">Levantamento De Peso</h3>
          </div>
          <div className="pilares__item">
            <img src={ esporte } alt="Esporte" />
            <h3 className="pilares__titulos">Esporte</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Pilares;