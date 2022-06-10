
import './App.css';
import styled from 'styled-components'
import React from 'react';
import logo from './img/discordia.png'
import MsgWhatsLab from './components/MsgWhatsLab/MsgWhatsLab'

const Header = styled.header`
height: 9vh;
margin: 0 auto;
width: 600px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
background-color: tomato;
`

const HeaderText = styled.p`
font-size: 40px;
padding: 6px;
margin: 0 10px;
`
const HeaderImg = styled.img`
width: 40px;
height: 40px;
`

const Footer = styled.footer`
height: 5vh;
margin: 0 auto;
width: 600px;
border: 1px solid black;
display: flex;
align-items: center;
background-color: tomato;
justify-content: space-around;
`

const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: end;
margin: 0 auto;
width: 600px;
height: 80vh;
border: 1px solid black;
background-color: antiquewhite;
overflow: auto;
overflow-y: scroll;`

const InputUser = styled.input`
width: 100px;
height: 20px;
`

const InputTexto = styled.input`
width: 350px;
height: 20px;
`

const BotaoEnviar = styled.button`
background-color: darkgoldenrod;
font-size: 16px;
color: white;
margin: 0 10px;
`

class App extends React.Component {
  state = {

    mensagem: [],
    inputUsuario: "",
    inputMensagem: ""
  }
  
  enviaMensagem = () => {

    if(this.state.inputUsuario === "" && this.state.inputMensagem === "") {
      alert("Digite algo!")
    } else {
    const novaMensagem = {
      nomeUsuario: this.state.inputUsuario,
      textoMensagem: this.state.inputMensagem
    }

    const mensagensAtualizado = [...this.state.mensagem, novaMensagem]

    this.setState({mensagem: [...mensagensAtualizado]})
    this.setState({
      inputMensagem: ""
    })
  }
  }

  removeMensagem = (id) => {
    const arrayMensagemApagada = this.state.mensagem.filter((mensagem, index) => {
    return id !== index
    })
  }
  
  onChangeInputUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value })
  }

  onChangeInputMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value })
  }

  onKeyPressEnter = (event) => {
    if (event.key === "Enter") {
      
    const novaMensagem = {
      nomeUsuario: this.state.inputUsuario,
      textoMensagem: this.state.inputMensagem
    }

    const mensagensAtualizado = [...this.state.mensagem, novaMensagem]

    this.setState({mensagem: [...mensagensAtualizado]})
    this.setState({
      inputMensagem: ""
    })
  
    }
  }

  render() {

    const mensagemNaTela = this.state.mensagem.map((mensagem, index) => {
      return (
      <>
        <MsgWhatsLab key={index}
        nomeUsuario = {mensagem.nomeUsuario}
        textoMensagem = {mensagem.textoMensagem}

        />
      </>
      )
     }
    )

    return (
    <>
      
      <Header>
          <HeaderImg src={logo} alt="logo" />
          <HeaderText>WhatsLab</HeaderText>
         
      </Header>

      <MainContainer>
          {mensagemNaTela}
      </MainContainer>

      <Footer>
          <InputUser
            value={this.state.inputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />

          <InputTexto
            value={this.state.inputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
            onKeyPress={this.onKeyPressEnter}
          />

          <BotaoEnviar onClick={this.enviaMensagem}> Enviar </BotaoEnviar>
      </Footer>
    </>
    )
  }
}

export default App;
