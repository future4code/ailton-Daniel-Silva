import styled from "styled-components";
import fundo from "../../img/fundo-labex.jpg";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
background-image: url(${fundo});
background-size: cover;
background-position: center;
`

export const ButtonContainer = styled.div`
display: flex;
width: 60vw;
height: 20vh;
align-items: center;
justify-content: space-around;
`

export const TextContainer = styled.div`
color: white;
font-size: 180px;
justify-content: center;
display: flex;
background-color: black;
opacity: 80%;
border: 1px solid white;
padding: 10px;
`

export const SiteButton = styled.button`
font-size: 30px;
background-color: #0A0847;
color: white;
padding: 30px;
border: 1px solid white;
border-radius: 70%;
box-shadow: 1px 1px 1px white;
cursor: pointer;

:hover {
    opacity: 75%;
    border: 1px solid gold;
}
`