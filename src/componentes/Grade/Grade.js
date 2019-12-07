import React from 'react';
import './Grade.scss';

class Grade extends React.Component {
  render() {
    return (
      <div className='container container-grade'>
        <div className="container-grade__elementos">
          <div className="container-grade__item">
            <div className="container-grade__conteudo">
              <h3>Endereço</h3>
              <p>Av. Timóteo Penteado, 1685<br />
              (em frente a Av. Suplicy)<br />
              Guarulhos - SP</p>
            </div>
          </div>
          <div className="container-grade__item">
            <div className="container-grade__conteudo">
              <h3>Grade de Horários</h3>
              <p>Segunda a Sexta - 6h, 7h, 8h, 9h, 12h, 16h, 17h, 18h, 19h, 20h, e 21h.<br />
              Sábado - 10h</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Grade;