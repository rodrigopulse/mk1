import React from 'react';
import axios from 'axios';

//bootstrap
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import MaskedFormControl from 'react-bootstrap-maskedinput'

//sass
import './Contato.scss';

class Contato extends React.Component {
  constructor(props) {
    super(props)
  }
  state = {
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    showModal: false
  }
  handleSubmit(e) {
    e.preventDefault()
    const { nome, telefone, email, mensagem } = this.state
    const data = new FormData ()
    data.append ('nome', nome)
    data.append ('telefone', telefone)
    data.append ('email', email)
		data.append ('mensagem', mensagem)
    axios.post('https://cors-anywhere.herokuapp.com/https://crossfitmk1.com/sendmail/mk1-contato.php', data)
    .then( (response) => {
			this.setState({
				nome: '',
				telefone: '',
        email: '',
				mensagem: '',
				showModal: true
			});
    })
    .catch( (response) => {
      console.log(response);
    });
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
    return(
      <div className="container contato">
        { this.state.showModal &&
          <div className="modal-aula">
            <div className="modal-aula__conteudo">
              <h4>Mensagem enviada com sucesso :)</h4>
              <p>Em breve entraremos em contato com você</p>
              <button className="btn btn-primary" onClick={this.closeModalHandler}>Ok</button>
            </div>
          </div>
        }
        <div className='container container--max'>
          <h3 className="txt-h1">Contato</h3>
          <p className="contato__descricao">Escreva sua mensagem abaixo que entraremos em contato em breve!</p>
        </div>
        <div className='container container--max'>
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
              <Form.Group as={Col} md="6">
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
    );
  }

}
export default Contato;