import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import logo from '../img/logo.png';

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

const BoxFrase = styled.h1`
padding: 20px;
`

const Main = styled.div`
height: 84vh;
display: flex;
flex-direction: column;
align-items: center;
background-color: black;
color: white;
`

const AddMusicaBox = styled.div`
border: 3px solid white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const DetailsBox = styled.div`
`

const Footer = styled.div`
border: 1px solid black;
height: 8vh;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(190deg, #8B0000 0%, #F08080 40%, #8B0000 100%);
`

export default class DetailsPlaylist extends React.Component {

    state = {
        name: "",
        artist: "",
        url: "",
        listaDeMusicas: [],
        novaMusica: {}
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`,
            body, {
            headers: {
                Authorization: "daniel-silva-ailton"
            }
        })
            .then((res) => {
                alert("Música Adicionada!")
                this.getPlaylistsTracks(this.props.idPlaylist)
            })
            .catch((error) => {
                alert("Algo deu errado!")
            })
    }

    getPlaylistsTracks = (id) => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
            {
                headers: {
                    Authorization: "daniel-silva-ailton"
                }
            })
            .then((res) => {
                this.setState({
                    listaDeMusicas: res.data.result.tracks
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    onChangeMusic = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onChangeArtist = (event) => {
        this.setState({
            artist: event.target.value
        })
    }

    onChangeUrl = (event) => {
        this.setState({
            url: event.target.value
        })
    }

    render() {

        const listaMusicas = this.state.listaDeMusicas.map((item, index) => {
            return <li key={index}> {item.name} {item.artist}</li>
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
                    <BoxFrase> Detalhes da Playlist </BoxFrase>
                    <DetailsBox>
                        {listaMusicas}
                    </DetailsBox>
                    <AddMusicaBox>
                        <label>Música:</label>
                        <input
                            placeholder='Música'
                            value={this.state.name}
                            onChange={this.onChangeMusic}
                        />

                        <label>Artista:</label>
                        <input
                            placeholder='Artista'
                            value={this.state.artist}
                            onChange={this.onChangeArtist}
                        />

                        <label>URL:</label>
                        <input
                            placeholder='URL'
                            value={this.state.url}
                            onChange={this.onChangeUrl}
                        />

                        <button onClick={this.addTrackToPlaylist}>Adicionar Música</button>
                    </AddMusicaBox>
                </Main>

                <Footer>Eu sou o Footer</Footer>

            </Container>
        )
    }
}