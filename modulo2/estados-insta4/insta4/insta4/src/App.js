import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const PostNovo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  height: 250px;
  width: 300px;
`

const InputsPost = styled.input`
padding: 8px;
margin: 12px 0;
width: 75%
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'Bulbassauro',
        fotoUsuario: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        fotoPost: 'https://i.pinimg.com/564x/5f/49/4a/5f494aa8f8d471c89853ec5554363669.jpg'
      },
      {
        nomeUsuario: 'Charmander',
        fotoUsuario: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
        fotoPost: 'https://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season02/season02_ep25_ss03.jpg'
      },
      {
        nomeUsuario: 'Squirtle',
        fotoUsuario: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
        fotoPost: 'https://copag.com.br/uploads/wp-copag-pokemon/2018/07/SquirtleCapa.jpg'
      }
    ],
    inputNomeUsuario: "",
    inputFotoUsuario: "",
    inputFotoPost: ""
  }
  
  adicionaPost = () => {

    const novoPost = {
      nomeUsuario: this.state.inputNomeUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost
    }

    const postsAtualizado = [...this.state.posts, novoPost]

    this.setState({posts: postsAtualizado})
    this.setState({
      nomeUsuario: "",
      fotoUsuario: "",
      fotoPost: ""
    })
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ InputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value })
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  }

  render() {
    const postInsta = this.state.posts.map((post, index) => {
      return (<>
        <Post key={index}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost} />
      </>
      )
    }
    )
    return (

      <MainContainer>

        {postInsta}

        <PostNovo>
          <InputsPost
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder="Nome Usuário"
          />

          <InputsPost
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder="Foto Usuário"
          />

          <InputsPost
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder="Foto Post"
          />

          <button onClick={this.adicionaPost}>Add Post</button>
        </PostNovo>

      </MainContainer>

    );
  }
}

export default App;
