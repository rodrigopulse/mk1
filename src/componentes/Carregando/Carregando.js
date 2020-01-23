import React from 'react';
import './Carregando.scss';

class Carregando extends React.Component{
  render(){
    return(
      <div className='overlay-loader'>
        <div className='loader'>Carregando...</div>
      </div>
    );
  }

}
export default Carregando;