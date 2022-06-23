import styled from 'styled-components';
import React from 'react';
import axios from "axios";
import TelaCadastro from './components/TelaCadastro';
import TelaUsuarios from './components/TelaUsuarios';
import DetailsUser from './components/DetailsUser';

export default class App extends React.Component {

  state = {
    nome: '',
    email: '',
    dados: [],
    telaAtual: "tela cadastro"
  }

  changeScreen = () => {
    switch (this.state.telaAtual) {
      case "tela cadastro":
        return <TelaCadastro goUsuarios={this.goUsuarios} />
        break;
      case "tela usuários":
        return <TelaUsuarios goCadastro={this.goCadastro} />
        break;
      default:
        return <div> Página inexistente! </div>
        break;
    }
  }

  goCadastro = () => {
    this.setState({
      telaAtual: "tela cadastro"
    })
  }

  goUsuarios = () => {
    this.setState({
      telaAtual: "tela usuários"
    })
  }

  render() {
    return (
      <div>
        {this.changeScreen()}
      </div>
    )
  }
}


