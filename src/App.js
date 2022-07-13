import React from "react";
import "./App.css";
import Foto from "./img/Lasanha.png";

export default class App extends React.Component {
  state = {
    nome: "Stella",
    idade: 22,
    comida: "Lasanha",
    musicas: ["Amarelo", "Flashes", "Lovesong"]
  };
  render() {
    return (
      <div>
        <h1>
          Fala pessoal, meu nome é {this.state.nome}, seja bem-vindo ao meu
          canal!
        </h1>
        <h2>Tenho {this.state.idade} anos, clique em se inscrever!</h2>
        <h3>E minha comida favorita é {this.state.comida}!</h3>
        <ol>
          <li>{this.state.musicas[0]}</li>
          <li className="item">{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ol>
        <figure>
          <a href="https://s2.glbimg.com/GToJPVardYjpzSeMfNdhCRqp6NU=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/F/5/hm5zNWRiAawYNSghKZbw/capa-materia-gshow-2022-02-16t145245.399.png">
            <img src={Foto} alt="lasanha" />
          </a>
        </figure>
      </div>
    );
  }
}
