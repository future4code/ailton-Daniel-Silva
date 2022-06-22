import styled from 'styled-components';
import React from 'react';
import axios from "axios";

const Container = styled.div`
display: flex;
flex-direction: column;
`

const Header = styled.div`
height: 8vh;
justify-content: center;
align-items: center;
display: flex;
border: 1px solid black;
`

const Main = styled.div`
height: 84vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const InputFormulario = styled.input`
width: 300px;
margin: 10px;
`

const BoxFormulario = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
height: 300px;
width: 500px;
box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.5);
border-radius: 12%;
`

const Footer = styled.div`
height: 8vh;
border: 1px solid black;
`

class App extends React.Component {
  state = {
    nome: '',
    email: '',
    dados: [],
    pagina: false
  }

  onChangeInput = e => {
    this.setState({ nome: e.target.value })
  }
  onChangeInputEmail = e => {
    this.setState({ email: e.target.value })
  }
  componentDidMount() {
    this.getDados()
  }
  getDados = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        {
          headers: {
            Authorization: 'daniel-silva-ailton'
          }
        }
      )
      .then((response) => {
        this.setState({ dados: response.data })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }
  mudapagina = () => {
    this.setState({
      pagina: !this.state.pagina
    })
  }

  deletarUsuario = (id) => {
    axios.delete(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      {
        headers:
        {
          Authorization: 'daniel-silva-ailton'
        }
      }
    )
  }

  creatDados = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email
    }
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
        body,
        {
          headers: {
            Authorization: 'daniel-silva-ailton'
          }
        }
      )
      .then(response => {
        console.log(response)
        this.getDados();
        alert('Usuário Criado')
      })
      .catch(erro => {
        console.log(erro)
        alert('Erro no Cadastro')
      })
  }
  render() {
    const arrayDados = this.state.dados.map(item => {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      )
    })
    console.log(this.state.dados)
    console.log(arrayDados)

    return (
      <Container>
        <Header>
          <button onClick={this.mudapagina}>Muda de Página </button>
        </Header>
        <Main>
          {this.state.pagina === false && (
            <BoxFormulario>
              <label> Nome: </label>
              <InputFormulario
                value={this.state.nome}
                onChange={this.onChangeInput} />
              <label> E-mail: </label>
              <InputFormulario
                value={this.state.email}
                onChange={this.onChangeInputEmail}
              />

              <button onClick={this.creatDados}>Criar Usuario</button>

            </BoxFormulario>
          )}

          {this.state.pagina === true && (
            <div>
              <h1>Lista de Usuários</h1>
              {arrayDados}
            </div>
          )}
        </Main>
        <Footer></Footer>
      </Container>
    )
  }
}

export default App
