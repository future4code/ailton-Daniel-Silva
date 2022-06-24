import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import DetailsUser from './DetailsUser'


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
align-items: center;
margin-top: 40px;
`

const CardUsuario = styled.div`
border: 1px solid black;
padding: 8px;
margin: 16px;
width: 300px;
display: flex;
justify-content: space-between;
`

const BoxUsuarios = styled.div`
`

const Footer = styled.div`
height: 8vh;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
`

const DeleteButton = styled.button`
color: red;`

const ChangeScreenButton = styled.button`
padding: 12px;
font-size: 20px;
background-color: sandybrown;
`

export default class TelaUsuarios extends React.Component {

    state = {
        users: [],
        name: "",
        email: "",
        id: "",
        userInfos: {},
        mostrar: false
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
                headers: {
                    Authorization: "daniel-silva-ailton"
                }
            })
            .then((res) => {
                this.setState({ users: res.data })
            })
            .catch((erro) => {
                alert("Deu ruim!")
            })
    }

    deleteUser = (id) => {

        if (window.confirm("Deseja deletar usuário?")) {

            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
                {
                    headers: {
                        Authorization: "daniel-silva-ailton"
                    }
                })
                .then((res) => {
                    alert("Usuário Deletado")
                    this.getAllUsers()
                    this.changeScreenTwo()
                })
                .catch((erro) => {
                    alert("Erro ao deletar usuário")
                })
        }
    }

    getUserByld = (id) => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "daniel-silva-ailton"
                }
            })
            .then((res) => {
                console.log(res.data)
                this.setState({
                    userInfos: res.data
                })
                this.setState({
                    mostrar: true
                })
            })
            .catch((erro) => {
                alert("Algo deu errado")
            })
    }

    changeScreenTwo = () => {
        this.setState({
            mostrar: !this.state.mostrar
        })
    }

    render() {

        const listaUsers = this.state.users.map((user) => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.getUserByld(user.id)}> Detalhes </button>
                <DeleteButton onClick={() => this.deleteUser(user.id)}> X </DeleteButton>
            </CardUsuario>
        })

        return (<>
            
            {this.state.mostrar ? <DetailsUser deleteUser={this.deleteUser} changeScreenTwo={this.changeScreenTwo} userInfos={this.state.userInfos}/> :

                <Container>

                    <Header>
                        <ChangeScreenButton onClick={this.props.goCadastro}> Trocar de Tela </ChangeScreenButton>
                    </Header>
                    <Main>
                        <h1>Lista de Usuários</h1>
                        <BoxUsuarios>
                            {listaUsers}
                        </BoxUsuarios>
                    </Main>
                    <Footer>API - Labenusers</Footer>

                </Container> }

        </>
        )
    }
}