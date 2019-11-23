import React from 'react';
import { Helmet } from "react-helmet";
import emailjs from 'emailjs-com';

//bootstrap
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import MaskedFormControl from 'react-bootstrap-maskedinput'
//sass
import './AulaExperimental.scss';

//core
import Header from '../../core/Header/Header';
import Footer from '../../core/Footer/Footer';

class AulaExperimental extends React.Component {

  state = {
    nome: '',
    email: '',
    horario: '',
    telefone: '',
    mensagem: '',
    showModal: false
  }
  handleSubmit(e) {
		e.preventDefault()
    const { nome, email, horario, telefone, mensagem } = this.state
    let templateParams = {
      email: email,
      nome: nome,
      horario: horario,
			telefone: telefone,
      mensagem: mensagem,
     }
     emailjs.send(
      'gmail',
      'aulaexperimental',
      templateParams,
      'user_cwQTG1vS8pQUEEexKWRGr'
		 )
		 this.resetForm();
	}
	resetForm() {
    this.setState({
      nome: '',
      email: '',
      horario: '',
      telefone: '',
      mensagem: '',
      showModal: true
    })

  }
	handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  closeModalHandler = () => {
    this.setState({
        showModal: false
    });
  }
  render() {
    return (
      <div className='container container-aula-experimental'>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Aula Experimental de Crossfit em Guarulhos - MK1</title>
          <meta name="description" content="Quer conhecer o que é CrossFit e toda a nossa estrutura? Então agente uma aula grátis no nosso box! Teremos o prazer em recebê-lo!" />
				</Helmet>
        <Header />
        { this.state.showModal &&
          <div className="modal-aula">
            <div className="modal-aula__conteudo">
              <h4>Aula agendada com sucesso :)</h4>
              <p>Foi enviado para o seu e-mail informações sobre a aula, te aguardamos em breve!</p>
              <button className="btn btn-primary" onClick={this.closeModalHandler}>Ok</button>
            </div>
          </div>
        }

        <div className="container container--max">
          <div className="container-aula-experimental__conteudo">
            <h1>Crossfit em Guarulhos</h1>
            <h2>Quer conhecer o que é CrossFit e toda a nossa estrutura? Então agente uma aula grátis no nosso box! Teremos o prazer em recebê-lo!</h2>
            <h3>Preencha todos os campos e selecione um horário para agendar sua aula experimental na Crossfit MK-1.</h3>

            <form onSubmit={this.handleSubmit.bind(this)}>

              <Form.Row>
                <Form.Group as={Col} md="12">
                  <Form.Control
                    required
                    name="nome"
                    value={this.state.nome}
                    onChange={this.handleChange.bind(this, 'nome')}
                    size="lg"
                    type="text"
                    placeholder="Nome Completo"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12">
                  <Form.Control
                    required
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this, 'email')}
                    size="lg"
                    type="email"
                    placeholder="E-mail"
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6">
                  <MaskedFormControl
                    mask='(11) 1111-11111'
                    className="form-control-lg"
                    name="telefone"
                    value={this.state.telefone}
                    onChange={this.handleChange.bind(this, 'telefone')}
                    size="lg"
                    type="text"
                    placeholder="Telefone"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Control
                    onChange={this.handleChange.bind(this, 'horario')}
                    name="horario"
                    size="lg"
                    as="select" >
                    <option>Horário</option>
                    <option value="Segunda-feira às 20h">Segunda-feira às 20h</option>
                    <option value="Terça-feira às 20h">Terça-feira às 20h</option>
                    <option value="Quarta-feira às 19h">Quarta-feira às 19h</option>
                    <option value="Sexta-feira às 10h">Sexta-feira às 10h</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="12">
                  <Form.Control
                    name="mensagem"
                    value={this.state.mensagem}
                    onChange={this.handleChange.bind(this, 'mensagem')}
                    as="textarea"
                    size="lg"
                    rows="5"
                    placeholder="Mensagem"
                  />
                </Form.Group>
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