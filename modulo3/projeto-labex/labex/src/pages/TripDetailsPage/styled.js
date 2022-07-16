import styled from "styled-components";
import fundoDetalhes from "../../img/fundo-detalhes.jpg"

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-image: url(${fundoDetalhes});
background-size: cover;
background-position: center;
`

export const TripDetailsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px solid white;
height: 80vh;
width: 60vw;
color: white;
background-color: #0A0847;
opacity: 80%;
gap: 12px;
font-size: 24px;
`

export const TextCandidates = styled.p`
font-size: 28px;
border: 1px solid white;
width: 90%;
justify-content: center;
text-align: center;
`

export const TitleDetails = styled.p`
color: white;
font-size: 36px;
margin-bottom: 32px;
`

export const CandidatesContainer = styled.div`
display: flex;
flex-direction: column;
border: 2px solid white;
overflow: auto;
width: 90%;
gap: 4px;
font-size: 16px;
`

export const GoBackButton = styled.button`
width: 16vw;
margin-top: 20px;
background-color: #0A0847;
color: white;
border: 2px solid white;
border-radius: 4px;
padding: 8px;
cursor: pointer;

:hover {
    opacity: 75%;
    border: 2px solid gold;
}
`