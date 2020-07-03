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
              <p>Av Emílio Ribas, nº 3243<br />
              (esquina com a Rua José Bonifácio)<br />
              Guarulhos - SP</p>
            </div>
          </div>
          <div className="container-grade__item">
            <div className="container-grade__conteudo">
              <h3>Grade de Horários</h3>
              <p>Consulte-nos</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Grade;