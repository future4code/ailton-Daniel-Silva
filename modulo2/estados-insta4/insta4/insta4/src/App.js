import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Bulbassauro'}
          fotoUsuario={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'}
          fotoPost={'https://i.pinimg.com/564x/5f/49/4a/5f494aa8f8d471c89853ec5554363669.jpg'}
        />

        <Post
          nomeUsuario={'Charmander'}
          fotoUsuario={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'}
          fotoPost={'https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season02/season02_ep25_ss03.jpg'}
        />

        <Post
          nomeUsuario={'Squirtle'}
          fotoUsuario={'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'}
          fotoPost={'https://copag.com.br/uploads/wp-copag-pokemon/2018/07/SquirtleCapa.jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
