import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Seta from '../../assets/imagens/icones/seta.svg';
//sass
import './PerguntasFrequentes.scss'

class PerguntasFrequentes extends React.Component {
  render() {
    return(
      <div className="perguntas-frequentes">
        <div className="container container--max perguntas-frequentes__titulo">
          <h3 className="txt-h1">Perguntas Frequentes</h3>
        </div>
        <div className='container container--max'>
          <Accordion>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <span>Estou acima do peso... posso treinar CrossFit?</span> <img src={Seta} alt="Seta" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Sim, vc pode!<br />Na verdade o CrossFit é uma das atividades mais indicadas para perda peso, ganho de massa muscular e saúde, devido a sua metodologia de treino e o alto gasto calórico</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <span>Qualquer pessoa pode fazer CrossFit?</span> <img src={Seta} alt="Seta" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>O CrossFit é uma atividade física que exige que você seja bem orientado para que todo o seu treino seja adaptado ao seu nível de condicionamento físico e necessidade. Para que isto ocorra, você será orientado por profissionais formados em educação física e grande experiência com a atividade.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <span>É verdade que a mulher fica musculosa treinando CrossFit?</span> <img src={Seta} alt="Seta" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Se esse for o objetivo dela, ela deverá ser orientada por um médico e um nutricionista, para que a sua alimentação proporcione o grau de hipertrofia desejado, caso contrário você irá conquistar um corpo mais "atlético" e com certeza mais saudável.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <span>Criança pode treinar CrossFit?</span> <img src={Seta} alt="Seta" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Ela deve treinar CrossFit! O CrossFit por ser um esporte que engloba outros esportes, faz com que a criança na sua fase de crescimento, adquira uma consciência corporal e formação estrutural diferenciada em relação a outros esportes.</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <span>Para dar aula de CrossFit, basta ter o Level I?</span> <img src={Seta} alt="Seta" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>Todos os profissionais que trabalham com CrossFit, devem ser formados em Educação Física.<br />
Nossa sugestão é que você consulte o CREF (Conselho Regional de Educação Física) e verifique se o profissional que irá lhe atender seja credenciado.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }

}
export default PerguntasFrequentes;