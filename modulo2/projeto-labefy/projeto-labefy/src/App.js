import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from './img/logo.png';
import CreatePlaylist from './components/CreatePlaylist';
import ListaPlaylist from './components/ListaPlaylist';
import DetailsPlaylist from './components/DetailsPlaylist';

const Container = styled.div`
`

export default class App extends React.Component {

  state = {
    telaAtual: "criar playlist",
    idPlaylist: ""
  }
  
  selectPage = () => {
    switch (this.state.telaAtual) {
      case "criar playlist":
        return <CreatePlaylist listaPlaylistPage={this.listaPlaylistPage} />
      case "lista playlist":
        return <ListaPlaylist irParaDetalhes={this.irParaDetalhes} idPlaylist={this.idPlaylist}/>
      case "detalhes":
        return <DetailsPlaylist DadosDetalhes={() => this.DetailsPlaylist()} idPlaylist={this.state.idPlaylist} />
    }
  }

  listaPlaylistPage = () => {
    this.setState({
      telaAtual: "lista playlist"
    })
  }

  irParaDetalhes = (id) => {
    this.setState({
      telaAtual: "detalhes",
      idPlaylist: id
    })
  }

  render() {

    return (
      
      <Container>
          {this.selectPage()}
      </Container>

    );
  }
}


