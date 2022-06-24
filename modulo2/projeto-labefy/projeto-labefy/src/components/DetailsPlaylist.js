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

    render() {
        console.log(this.props.playlistInfos)
        console.log(this.props.playlists)

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
                        {/* {this.props.playlist.name} */}
                        {this.props.playlistInfos}
                    </DetailsBox>
                </Main>

                <Footer>Eu sou o Footer</Footer>

            </Container>
        )
    }
}