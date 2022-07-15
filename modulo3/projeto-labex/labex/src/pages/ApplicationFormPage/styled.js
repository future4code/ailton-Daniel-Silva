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

export const InputContainer = styled.form`
border: 1px solid white;
height: 50vh;
width: 25vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
`

export const SendButton = styled.button`
width: 40%;
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