import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from './img/logo.png';
import CreatePlaylist from './components/CreatePlaylist';
import ListaPlaylist from './components/ListaPlaylist';

const Container = styled.div`
`

export default class App extends React.Component {

  state = {
    telaAtual: "criar playlist",
  }
  
  selectPage = () => {
    switch (this.state.telaAtual) {
      case "criar playlist":
        return <CreatePlaylist listaPlaylistPage={this.listaPlaylistPage} />
      case "lista playlist":
        return <ListaPlaylist />
    }
  }

  listaPlaylistPage = () => {
    this.setState({
      telaAtual: "lista playlist"
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


