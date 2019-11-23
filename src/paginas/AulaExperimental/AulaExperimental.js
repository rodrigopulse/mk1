import React from 'react';
import { Helmet } from "react-helmet";

//bootstrap
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
//sass
import './AulaExperimental.scss';

//core
import Header from '../../core/Header/Header';
import Footer from '../../core/Footer/Footer';

class AulaExperimental extends React.Component {
  render() {
    return (
      <div className='container container-aula-experimental'>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Aula Experimental de Crossfit em Guarulhos - MK1</title>
          <meta name="description" content="Quer conhecer o que é CrossFit e toda a nossa estrutura? Então agente uma aula grátis no nosso box! Teremos o prazer em recebê-lo!" />
				</Helmet>
        <Header />
        <div className="container container--max">
          <div className="container-aula-experimental__conteudo">
            <h1>Crossfit em Guarulhos</h1>
            <h2>Quer conhecer o que é CrossFit e toda a nossa estrutura? Então agente uma aula grátis no nosso box! Teremos o prazer em recebê-lo!</h2>
            <h3>Preencha todos os campos e selecione um horário para agendar sua aula experimental na Crossfit MK-1.</h3>

            <form>

              <Form.Row>
                <Form.Group as={Col} md="12">
                  <Form.Control size="lg" type="text" placeholder="Nome Completo" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12">
                  <Form.Control size="lg" type="email" placeholder="E-mail" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6">
                  <Form.Control size="lg" type="text" placeholder="Telefone" />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Control size="lg" as="select">
                    <option>Horário</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Control as="textarea" rows="5" />
              </Form.Row>
              <Button className="mt-4" variant="primary" size="lg" type="submit">
                ENVIAR
              </Button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}
export default AulaExperimental;