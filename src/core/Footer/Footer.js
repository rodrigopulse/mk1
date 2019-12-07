import React from 'react';
//sass
import './Footer.scss';

//imagens sociais
import iconeInstagram from '../../assets/imagens/social/instagram.svg';
import iconeFacebook from '../../assets/imagens/social/facebook.svg';
//import iconeYoutube from '../../assets/imagens/social/youtube.svg';

class Footer extends React.Component {
  render() {
    return(
      <div className='container'>
        <footer className="footer">
          <div className="container--max">
            <span className="footer__telefone">11 93022-9182</span>
            <p className="footer__endereco">Av. Dr. Timóteo Penteado, 1685 <br />
            (em frente a Av. Suplicy) - Guarulhos / SP</p>
          </div>
          <div className="footer__sociais">
            <a target="_blank" href="https://www.instagram.com/crossfitmk1/">
              <img src={ iconeInstagram } alt="Instagram"/>
            </a>
            <a target="_blank" href="https://www.facebook.com/crossfitmk1/">
              <img src={ iconeFacebook } alt="Facebook"/>
            </a>
          </div>
        </footer>
      </div>
    );
  }

}
export default Footer;