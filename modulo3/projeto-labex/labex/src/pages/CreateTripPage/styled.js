import styled from "styled-components";
import fundoForm from "../../img/fundo-form.jpg"

export const Container = styled.div`
background-image: url(${fundoForm});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`

export const TitleContainer = styled.p`
color: white;
font-size: 30px;
margin-bottom: 16px;
`

export const CreateTripContainer = styled.div`
color: white;
border: 1px solid white;
height: 50vh;
width: 25vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
background-color: #0A0847;
opacity: 80%;
`

export const InputContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
gap: 24px; 
`

export const SendButton = styled.button`
width: 90%;
cursor: pointer;
border-radius: 4px;
padding: 10px;
background-color: blueviolet;
color: white;
border: 2px solid white;
font-size: 16px;

:hover { 
    padding: 15px;
}
`

export const GoBackButton = styled.button`
width: 16vw;
margin-top: 40px;
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