import React from 'react';
import './Coach.scss';

// Imagens
import CoachDesktop from '../../assets/imagens/heros/head-coach-marcel-ligotti.jpg';
import Seta from '../../assets/imagens/icones/seta.svg';

class Coach extends React.Component {
  constructor(){
    super()
  }
  state = {
    leiaMais: false
  }
  abreLeiaMais = () => {
    this.setState({
      leiaMais: !this.state.leiaMais
    });
  }
  render() {
    return (
      <div className="coach">
        <div className="coach__imagem">
          <div className="coach__overlay"></div>
          <img src={CoachDesktop} alt="Head Coach Marcel Ligotti" />
        </div>
        <div className="container container--max">
          <div className={this.state.leiaMais ? "coach__conteudo coach__conteudo--open" : "coach__conteudo"}>
            <h3 className="txt-h1">Nosso head coach</h3>
            <h4 className="coach__nome">Marcel Ligotti</h4>
            <p>Graduado em Educação Física e Pós-graduado em Condicionamento Físico e Administração e Marketing Esportivo, possui mais de 24 anos de experiência na área de treinamento desportivo e saúde.</p>
            <p>Foi responsável técnico de grandes academias em São Paulo com experiência em cursos de fisiologia do exercício além de ser um experiente atleta de CrossFit, Karatê Kyokushin Oyama e Kick Boxe.</p>
            <ul>
              <li>• Comentarista da ESPN – Crossfit Games 2014, 2015 e 2016</li>
              <li>• Comentarista CrossFit BCC – CrossFit games 2019</li>
              <li>• Comentarista CrossTV • CrossFit Level 1</li>
              <li>• CrossFit Level 2</li>
              <li>• Crossfit Weightlifting Trainer Course</li>
              <li>• Capacitação Crossfit Brasil Nível I e II</li>
              <li>• Certificação em Levantamento de Peso Olímpico – Fortify</li>
              <li>• Certificação em movimentos ginásticos com Marcos Goto (técnico do Arthur Zanetti)</li>
              <li>• CrossFit Endurance Trainer</li>
              <li>• Curso MAD Powerlifting</li>
              <li>• F.Reis Weightlifting Level 1</li>
            </ul>
          </div>
          <div className="container container-botao-mais">
            <button className="btn-primary" onClick={this.abreLeiaMais}>Leia Mais <img src={Seta} alt="Seta" /></button>
          </div>
        </div>
      </div>
    );
  }

}
export default Coach;