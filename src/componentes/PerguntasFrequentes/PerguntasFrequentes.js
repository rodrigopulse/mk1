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
                <span>Crossfit machuca?</span> <img src={Seta} alt="Seta" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Aqui vai o texto que abre</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <span>Tenho uma lesão, posso treinar mesmo assim?</span> <img src={Seta} alt="Seta" />
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Aqui vai o texto que abre</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    );
  }

}
export default PerguntasFrequentes;