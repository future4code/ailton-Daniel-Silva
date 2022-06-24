import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

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

const BoxInfos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;
height: 400px;
width: 350px;
box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.5);
border-radius: 12%;
margin-top: 30px;
`
const Footer = styled.div`
height: 8vh;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
`

const ChangeScreenButton = styled.button`
padding: 12px;
font-size: 20px;
background-color: sandybrown;
`

const DeleteButton = styled.button`
color: red;
width: 100px;
margin-top: 12px;
`

const Infos = styled.p`
border: 1px solid black;
padding: 8px;
`

const EditButton = styled.button`
width: 100px;`

export default class DetailsUser extends React.Component {

    editUser = (id) => {

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`)
    }

    render() {

        return (
            <Container>
                <Header>
                    <ChangeScreenButton onClick={this.props.changeScreenTwo}> Voltar </ChangeScreenButton>
                </Header>
                <Main>
                    <BoxInfos>
                        <h3> Detalhes do Usuário </h3>
                        <p> Nome: <Infos> {this.props.userInfos.name} </Infos> </p>
                        <p> E-mail: <Infos> {this.props.userInfos.email} </Infos> </p>
                        <EditButton> Editar </EditButton>
                        <DeleteButton onClick={() => this.props.deleteUser(this.props.userInfos.id)}> Delete </DeleteButton>
                    </BoxInfos>
                </Main>
                <Footer>API - Labenusers</Footer>
            </Container>
        )
    }
}