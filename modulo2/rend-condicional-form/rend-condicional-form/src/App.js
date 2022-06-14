
import React from 'react';
import styled from 'styled-components'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const ContainerPai = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 100px;
`
const ContainerInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
height: 500px;
border: 1px solid black;
border-radius: 10%;
background-color: lightgoldenrodyellow;
`



class App extends React.Component {

  state = {
    telaAtual: "tela1",
    inputUsuario: "",
    inputIdade: "",
    inputEmail: "",
    inputCurso: "",
    inputUnidadeEnsino: "",
    inputDesculpas: ""
  }
   goTela1 = () => {
   this.setState({
    telaAtual: "tela1"
   })
   }

   goTela2 = () => {
   this.setState({
    telaAtual: "tela2"
   })
   }

   goTela3 = () => {
    this.setState({
      telaAtual: "tela3"
    })
   }

   goTelaFinal = () => {
    this.setState({
      telaAtual: "telaFinal"
    })
   }


  mudaTela = () => {
    switch (this.state.telaAtual) {
      case "tela1":
        return <Etapa1 goTela2={this.goTela2}/>
        break;
      case "tela2":
        return <Etapa2 goTela3={this.goTela3} />
        break;
      case "tela3":
        return <Etapa3 goTelaFinal={this.goTelaFinal} />
        break;
      case "telaFinal":
        return <Final goTela1={this.goTela1} />
        break;    
  }
}

  onChangeInputUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value })
  }

  onChangeInputIdade = (event) => {
    this.setState({ inputIdade: event.target.value })
  }

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }

  onChangeInputCurso = (event) => {
    this.setState({ inputCurso: event.target.value })
  }

  onChangeInputUnidadeEnsino = (event) => {
    this.setState({ inputUnidadeEnsino: event.target.value })
  }

  render() {

    return (
      <ContainerPai>
        <ContainerInput>
       {this.mudaTela()}
        </ContainerInput>
      </ContainerPai>
    )
  }
}

export default App;
