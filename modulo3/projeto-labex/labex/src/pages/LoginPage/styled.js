import styled from "styled-components";
import fundoLogin from "../../img/fundo-login-labex.jpg";

export const LoginContainer = styled.div`
height: 50vh;
width: 25vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border: 1px solid black;
background-color: #0A0847;
border: 2px solid white;
color: white;
opacity: 80%;
`

export const Container = styled.div`
background-image: url(${fundoLogin});
background-size: cover;
background-position: center;
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const InputContainer = styled.form`
display: flex;
flex-direction: column;
gap: 30px;
align-items: center;
justify-content: space-around;
`

export const LoginButton = styled.button`
width: 100%;
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