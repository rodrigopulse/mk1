import React from "react";
import "./Grade.scss";

class Grade extends React.Component {
  render() {
    return (
      <div className="container container-grade">
        <div className="container-grade__elementos">
          <div className="container-grade__item">
            <div className="container-grade__conteudo">
              <h3>Unidade 1</h3>
              <p>
                Av Emílio Ribas, 3243
                <br />
                Vila Galvão - Guarulhos
                <br />
                <a href="https://www.google.com/maps/place/Av.+Em%C3%ADlio+Ribas,+3243+-+Vila+Galvao,+Guarulhos+-+SP,+07056-020/@-23.4601357,-46.5627879,20z/data=!4m5!3m4!1s0x94cef5a4ec99d353:0xa029294d97efb31a!8m2!3d-23.4602298!4d-46.5628786">
                  Ver no Mapa
                </a>
              </p>
            </div>
          </div>
          <div className="container-grade__item">
            <div className="container-grade__conteudo">
              <h3>Unidade 2</h3>
              <p>
                Rua Santa Izabel, 756
                <br />
                Vila Augusta - Guarulhos <br />
                <a href="https://www.google.com/maps/place/R.+Santa+Izabel,+756+-+Vila+Augusta,+Guarulhos+-+SP,+07023-022/@-23.4799849,-46.543305,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5f899c57af3d:0x1422f9f6b1e2076f!8m2!3d-23.4799849!4d-46.5411163">
                  Ver no Mapa
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Grade;
