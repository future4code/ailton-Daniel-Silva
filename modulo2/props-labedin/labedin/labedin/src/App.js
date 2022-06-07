import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import perfil from './img/perfil.jpeg';
import labenu from './img/labenu.PNG';
import uff from './img/uff.PNG';
import email from './img/envelope.png';
import endereco from './img/lar.png';
import kpmg from './img/kpmg.PNG'
import cesta from './img/cesta.PNG'
import styled from 'styled-components';

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`
const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

function App() {
  return (
    <ContainerApp>
      <PageSectionContainer>
        <Titulo>Dados pessoais</Titulo>
        <CardGrande
          imagem={perfil}
          nome="Daniel Andrade"
          descricao="Oi, eu sou o Daniel. Sou um engenheiro em transição de carreira para Desenvolvimento Full Stack"
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/626/626013.png"
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno
          imagem={email}
          titulo="Email: "
          descricao="daniel.devzinho@bol.com.br"
        />

        <CardPequeno
          imagem={endereco}
          titulo="Endereço: "
          descricao=" Rua dos Alfeneiros, Nº 4, Londres"
        />

      </PageSectionContainer>

      <PageSectionContainer>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande
          imagem={labenu}
          nome="Labenu"
          descricao="Curso de Desenvolvedor Full Stack"
        />

        <CardGrande
          imagem={uff}
          nome="Universidade Federal Fluminense"
          descricao="Bacharelado em Engenharia - Engenharia de Produção"
        />

        <CardGrande
          imagem={kpmg}
          nome="KPMG"
          descricao="Trabalho como consultor na KPMG"
        />

        <CardGrande
          imagem={cesta}
          nome="Cesta Mineira"
          descricao="Trabalho no Planejamento Estratégico e Logística"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </PageSectionContainer>
    </ContainerApp>
  );
}

export default App;
