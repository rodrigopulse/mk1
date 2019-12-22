import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

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
                Crossfit machuca?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Aqui vai o texto que abre</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Tenho uma lesão, posso treinar mesmo assim?
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