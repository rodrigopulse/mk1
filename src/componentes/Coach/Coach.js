import React from 'react';
import './Coach.scss';

// Imagens
import CoachDesktop from '../../assets/imagens/heros/head-coach-marcel-ligotti.jpg';

class Coach extends React.Component {
  render() {
    return (
      <div className="coach">
        <div className="coach__imagem">
          <div className="coach__overlay"></div>
          <img src={CoachDesktop} alt="Head Coach Marcel Ligotti" />
        </div>
        <div className="container container--max">
          <div className="coach__conteudo">
            <h3 className="txt-h1">Nosso head coach</h3>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
    );
  }

}
export default Coach;