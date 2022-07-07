import styled from "styled-components";

export const HeaderSection1 = styled.div`
height: 12vh;
border: 2px solid black;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #ff9090;
`

export const HeaderText = styled.p`
font-size: 20px;
`

export const HeaderButton = styled.button`
border-radius: 12px;
padding: 8px;
`

export const MainContainer = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const UserCard = styled.div`
height: 60vh;
width: 40vw;
display: flex;
flex-direction: column;
border: 1px solid black;
align-items: center;
justify-content: center;
margin-top: 120px;

> img {
    height: 50vh;
    width: 30vw;
}
`

export const NameAndAge = styled.div`
gap: 0 20px;
margin-top: 10px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const ButtonYes = styled.button`
border-radius: 60%;
padding: 30px;
font-size: 30px;
border-color: green;
color: green;
`

export const ButtonNo = styled.button`
border-radius: 60%;
padding: 30px;
font-size: 30px;
border-color: red;
color: red;
`