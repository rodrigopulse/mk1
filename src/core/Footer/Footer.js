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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.7250372690984!2d-46.56286085462839!3d-23.46021705030715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef5a48d8d4337%3A0x9f34eee37cc8221e!2sAv.%20Em%C3%ADlio%20Ribas%2C%203243%20-%20Jardim%20Vila%20Galvao%2C%20Guarulhos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1592758705766!5m2!1spt-BR!2sbr" width="100%" height="350" aria-hidden="false"></iframe>
        <footer className="footer">
          <div className="container--max">
            <span className="footer__telefone">11 93022-9182</span>
            <p className="footer__endereco">Av Emílio Ribas, nº 3243 <br />
            (esquina com a Rua José Bonifácio) - Guarulhos / SP</p>
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