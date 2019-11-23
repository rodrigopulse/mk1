import React from 'react';
//sass
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return(
      <div className='container'>
        <footer className="footer">
          <div className="container--max">
            <span className="footer__telefone">11 93022-9182</span>
            <p className="footer__endereco">Av. Dr. Timóteo Penteado, 1685 <br />
            (em frente a Av. Suplicy) - Guarulhos / SP</p>
          </div>
        </footer>
      </div>
    );
  }

}
export default Footer;