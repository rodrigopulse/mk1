import React from "react";
// sass
import "./GaleriaFotos.scss";

import Fechar from "../../assets/imagens/icones/fechar.svg";
import thumb1 from "../../assets/imagens/espaco/crossfit-guarulhos-mk1-1-thumb.jpg";
import imagem1 from "../../assets/imagens/espaco/crossfit-guarulhos-mk1-1.jpg";
import thumb2 from "../../assets/imagens/espaco/crossfit-guarulhos-mk1-2-thumb.jpg";
import imagem2 from "../../assets/imagens/espaco/crossfit-guarulhos-mk1-2.jpg";
import thumb3 from "../../assets/imagens/espaco/crossfit-guarulhos-mk1-3-thumb.jpg";
import imagem3 from "../../assets/imagens/espaco/crossfit-guarulhos-mk1-3.jpg";
import thumb4 from "../../assets/imagens/espaco/unidade-2-thumb.jpg";
import imagem4 from "../../assets/imagens/espaco/unidade-2.jpg";
import thumb5 from "../../assets/imagens/espaco/unidade-2-1-thumb.jpg";
import imagem5 from "../../assets/imagens/espaco/unidade-2-1.jpg";
import thumb6 from "../../assets/imagens/espaco/unidade-2-2-thumb.jpg";
import imagem6 from "../../assets/imagens/espaco/unidade-2-2.jpg";

class GaleriaFotos extends React.Component {
  state = { isOpen: false, imagemShow: "", tituloShow: "" };
  imagens = [
    {
      imagem: imagem1,
      thumb: thumb1,
      titulo: "Unidade 1",
    },
    {
      imagem: imagem2,
      thumb: thumb2,
      titulo: "Unidade 1",
    },
    {
      imagem: imagem3,
      thumb: thumb3,
      titulo: "Unidade 1",
    },
    {
      imagem: imagem4,
      thumb: thumb4,
      titulo: "Unidade 2",
    },
    {
      imagem: imagem5,
      thumb: thumb5,
      titulo: "Unidade 2",
    },
    {
      imagem: imagem6,
      thumb: thumb6,
      titulo: "Unidade 2",
    },
  ];
  render() {
    const { isOpen } = this.state;
    return (
      <div className="container galeria-fotos">
        {isOpen && (
          <div
            className="galeria-modal"
            onClick={() =>
              this.setState({
                isOpen: false,
                imagemShow: "",
                tituloShow: "",
              })
            }
          >
            <button className="galeria-modal__fechar">
              <img src={Fechar} alt="Fechar Modal" />
            </button>
            <div className="galeria-modal__imagem">
              <img src={this.state.imagemShow} alt="Crossfit Mk1" />
            </div>
            <p className="galeria-modal__titulo">{this.state.tituloShow}</p>
          </div>
        )}

        <div className="galeria-fotos">
          {this.imagens.map((imagem, index) => (
            <div key={index} className="galeria-fotos__thumb">
              <button
                className="galeria-fotos__botao"
                onClick={() =>
                  this.setState({
                    isOpen: true,
                    imagemShow: imagem.imagem,
                    tituloShow: imagem.titulo,
                  })
                }
              >
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
