import React from 'react';
// sass
import "./GaleriaFotos.scss"

import Fechar from '../../assets/imagens/icones/fechar.svg';
import thumb1 from '../../assets/imagens/espaco/crossfit-guarulhos-mk1-thumb-1.jpg';
import imagem1 from '../../assets/imagens/espaco/crossfit-guarulhos-mk1-1.jpg';

class GaleriaFotos extends React.Component {
  state = { isOpen: false}
  imagens = [
    {
      imagem: imagem1,
      thumb: thumb1
    },
    {
      imagem: imagem1,
      thumb: thumb1
    },
    {
      imagem: imagem1,
      thumb: thumb1
    }
  ]
  render() {
    console.log(this.imagens);
    const { isOpen } = this.state;
    return(
      <div className="container galeria-fotos">

        {isOpen && (
          <div
            className="galeria-modal"
            onClick={
            () => this.setState({
              isOpen: false,
              imagemShow: ''
            })
            }
           >
             <button className="galeria-modal__fechar">
               <img src={Fechar} alt="Fechar Modal" />
             </button>
            <div className="galeria-modal__imagem">
              <img src={this.state.imagemShow} alt="Crossfit Mk1" />
            </div>
          </div>
        )}

        <div className="galeria-fotos">
          {this.imagens.map((imagem)=> (
            <div className="galeria-fotos__thumb">
              <button className="galeria-fotos__botao"
              onClick={
                () => this.setState({
                  isOpen: true,
                  imagemShow: imagem.imagem
                })
              }>
              <img src={imagem.thumb} alt="Crossfit Mk1" />
            </button>
          </div>
          ))}
        </div>
      </div>

    );
  }

}
export default GaleriaFotos;