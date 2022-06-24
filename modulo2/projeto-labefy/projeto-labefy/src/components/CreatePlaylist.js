import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from '../img/logo.png'

const Container = styled.div`
`

const ImagemHeader = styled.img`
height: 60px;
width: 60px;
margin-left: 40px;
margin-right: 20px;
`

const TextoHeader = styled.p`
font-size: 30px;
`

const ButtonHeader = styled.button`
margin-right: 30px;
padding: 16px;
font-size: 16px;
background-color: #E9967A;
`


const Header = styled.div`
border: 1px solid black;
height: 8vh;
display: flex;
justify-content: space-between;
align-items: center;
background: linear-gradient(190deg, #8B0000 0%, #F08080 40%, #8B0000 100%);
`

const LeftHeader = styled.div`
display: flex;
align-items: center;
`

const Main = styled.div`
height: 84vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: black;
`

const BoxCriaPlaylist = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid white;
height: 300px;
width: 400px;
box-shadow: 10px 10px 6px rgba(0, 0, 0, 0.5);
background: linear-gradient(50deg, #8B0000 0%, #F08080 40%, #8B0000 100%);
border-radius: 12%;`

const Footer = styled.div`
border: 1px solid black;
height: 8vh;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(190deg, #8B0000 0%, #F08080 40%, #8B0000 100%);
`

const AddPlaylistButton = styled.button`
width: 150px;
padding: 5px;
background-color: #E9967A;
`
const PlaylistListButton = styled.button`
width: 150px;
padding: 5px;
background-color: #E9967A;
`

export default class CreatePlaylist extends React.Component {

    state = {
        name: "",
        listaPlaylists: [],
    }

    createPlaylist = () => {

        const body = {
            name: this.state.name
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
            body, {
            headers: {
                Authorization: "daniel-silva-ailton"
            }
        })
            .then((response) => {
                alert("Playlist Criada!")
                const novaListaPlaylists = [...this.state.listaPlaylists, this.state.name]
                this.setState({
                    listaPlaylists: novaListaPlaylists
                })
                this.setState({
                    name: ""
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    onChangePlaylist = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        const todasPlaylists = this.state.listaPlaylists.map((playlist) => {
            return <li key={playlist}> {playlist} </li>
        })

        return (

            <Container>
                <Header>
                    <LeftHeader>
                        <ImagemHeader src={logo} />
                        <TextoHeader>Labefy</TextoHeader>
                    </LeftHeader>
                    <ButtonHeader>Crie uma conta</ButtonHeader>
                </Header>

                <Main>
                    <BoxCriaPlaylist>
                        <label>Digite o nome da Playlist:</label>
                        <input
                            placeholder='Digite a Playlist'
                            value={this.state.inputPlaylist}
                            onChange={this.onChangePlaylist}
                        />
                        <AddPlaylistButton onClick={this.createPlaylist}>Adicionar</AddPlaylistButton>
                        <PlaylistListButton onClick={this.props.listaPlaylistPage}>Lista de Playlists</PlaylistListButton>
                    </BoxCriaPlaylist>
                </Main>

                <Footer>Eu sou o Footer</Footer>
            </Container>

        );
    }
}
