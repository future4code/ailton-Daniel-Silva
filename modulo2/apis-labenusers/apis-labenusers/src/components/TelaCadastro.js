import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
`

const InputFormulario = styled.input`
width: 300px;
margin: 10px;
`
const Header = styled.div`
height: 8vh;
justify-content: center;
align-items: center;
display: flex;
border: 1px solid black;
`

const ChangeScreenButton = styled.button`
padding: 12px;
font-size: 20px;
background-color: sandybrown;
`

const Main = styled.div`
height: 84vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
display: flex;
justify-content: center;
align-items: center;
`

export default class TelaCadastro extends React.Component {

    state = {
        name: "",
        email: ""
    }

    onChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    onChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    createUser = () => {

        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body, {
            headers: {
                Authorization: "daniel-silva-ailton"
            }
        }
        )
            .then((response) => {
                alert("Usuário cadastrado")
                this.setState({ name: "" })
                this.setState({ email: "" })
            })
            .catch((error) => {
                alert("Cadastro não autorizado")
            })
    }

    render() {

        return (
            <Container>
                <Header>
                    <ChangeScreenButton onClick={this.props.goUsuarios}>Trocar de Tela</ChangeScreenButton>
                </Header>
                <Main>
                    <BoxFormulario>
                        <h2>Cadastro de Usuários</h2>
                        <label>Nome:</label>
                        <InputFormulario
                            value={this.state.name}
                            onChange={this.onChangeName}
                            placeholder='Nome'
                        />
                        <label>E-mail:</label>
                        <InputFormulario
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            placeholder='E-mail'
                        />
                        <button onClick={this.createUser}>Cadastrar</button>
                    </BoxFormulario>
                </Main>
                <Footer>API - Labenusers</Footer>
            </Container>
        )
    }
}