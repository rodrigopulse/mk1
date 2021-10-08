import React from "react";
import { Helmet } from "react-helmet";

//sass
import "./AulaExperimental.scss";

//core
import Header from "../../core/Header/Header";
import Footer from "../../core/Footer/Footer";

class AulaExperimental extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="container container-aula-experimental">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Aula Experimental de Crossfit em Guarulhos - MK1</title>
          <meta
            name="description"
            content="Quer conhecer o que é CrossFit e toda a nossa estrutura? Então agente uma aula grátis no nosso box! Teremos o prazer em recebê-lo!"
          />
        </Helmet>
        <Header />

        <div className="container container--max">
          <div className="container-aula-experimental__conteudo">
            <h1>Crossfit em Guarulhos</h1>
            <h2>
              Quer conhecer o que é CrossFit e toda a nossa estrutura? Então
              agente uma aula grátis no nosso box! Teremos o prazer em
              recebê-lo!
            </h2>
            <h3>
              Escolha a unidade onde quer fazer a aula experimental abaixo
            </h3>
            <div className="container botao-aula-esperimental">
              <a
                href="https://app.tecnofit.com.br/tfRedirect?u=4F3A11C04603"
                className="btn btn-primary"
              >
                Unidade Vila Galvão
              </a>
              <a href="https://bit.ly/3kL1H5c" className="btn btn-primary">
                Unidade Vila Augusta
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default AulaExperimental;
