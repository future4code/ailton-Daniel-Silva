import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from '../img/logo.png';
import DetailsPlaylist from './DetailsPlaylist';

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
flex: wrap;
flex-direction: column;
align-items: center;
background-color: black;
color: white;
`

const Footer = styled.div`
border: 1px solid black;
height: 8vh;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(190deg, #8B0000 0%, #F08080 40%, #8B0000 100%);
`

const CardPlaylist = styled.div`
padding: 8px;
margin: 16px;
width: 300px;
display: flex;
justify-content: space-between;
align-items: center;
display: flex;
border: 1px solid #8B0000;
`

const BoxPlaylist = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
`

const BoxFrase = styled.h1`
padding: 20px;
`

const DeleteButton = styled.button`
background-color: #E9967A;
padding: 4px;`

const DetailsButton = styled.button`
background-color: #E9967A;
padding: 4px;
`

export default class ListaPlaylist extends React.Component {

    state = {
        playlists: [],
        showScreen: false,
        playlistInfos: {},
        name: "",
        artist: "",
        url: "",
        listaDeMusicas: [],
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
            {
                headers: {
                    Authorization: "daniel-silva-ailton"
                }
            })
            .then((res) => {
                this.setState({
                    playlists: res.data.result.list
                })

            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    deletePlaylist = (id) => {

        if (window.confirm("Deseja deletar playlist?")) {

            axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
                {
                    headers: {
                        Authorization: "daniel-silva-ailton"
                    }
                })
                .then((res) => {
                    alert("Playlist Deletada!")
                    this.getAllPlaylists()
                })
                .catch((error) => {
                    console.log(error.message)
                })
        }
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
                    playlistInfos: res.data.result.tracks
                })
                this.setState({
                    showScreen: true
                })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    addTrackToPlaylist = (id) => {

        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
            body, {
            headers: {
                Authorization: "daniel-silva-ailton"
            }
        })
            .then((res) => {
            })
            .catch((error) => {
            })
    }

    changeScreen = () => {
        this.setState({
            showScreen: !this.state.showScreen
        })
    }



    render() {

        const listaDePlaylists = this.state.playlists?.map((playlist) => {
            return <CardPlaylist key={playlist.id}>
                {playlist.name}
                <DetailsButton onClick={() => this.getPlaylistsTracks(playlist.id)}> Detalhes </DetailsButton>
                <DeleteButton onClick={() => this.deletePlaylist(playlist.id)}> Delete </DeleteButton>
            </CardPlaylist>
        })

        return (
            <>
                {this.state.showScreen ? <DetailsPlaylist playlists={this.state.playlists} playlistInfos={this.state.playlistInfos} deletePlaylist={this.deletePlaylist} /> :
                    <Container>
                        <Header>
                            <LeftHeader>
                                <ImagemHeader src={logo} />
                                <TextoHeader>Labefy</TextoHeader>
                            </LeftHeader>
                            <ButtonHeader>Crie uma conta</ButtonHeader>
                        </Header>
                        <Main>
                            <BoxFrase>Lista de Playlists</BoxFrase>
                            <BoxPlaylist>
                                {listaDePlaylists}
                            </BoxPlaylist>
                        </Main>
                        <Footer>Eu sou o footer</Footer>
                    </Container>
                }
            </>
        )
    }
}