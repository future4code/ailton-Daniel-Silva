import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from './img/logo.png';
import CreatePlaylist from './components/CreatePlaylist';

const Container = styled.div`
`

export default class App extends React.Component {

  state = {
    telaAtual: "criar playlist",
  }
  
  selectPage = () => {
    switch (this.state.telaAtual) {
      case "criar playlist":
        return <CreatePlaylist />
    }
  }

  render() {

    return (
      
      <Container>
          {this.selectPage()}
      </Container>

    );
  }
}


