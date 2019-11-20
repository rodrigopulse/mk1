import React from 'react';
//sass
import './Chamada.scss';

class Chamada extends React.Component {
  render() {
    return (
      <div className="chamada">
        <div className="container--max text-center">
          <h3>Mude seus hábitos, mude seu corpo!</h3>
          <h4>Nosso objetivo é condicionar você da forma mais ampla possível.</h4>
        </div>
      </div>
    )
  }
}

export default Chamada;