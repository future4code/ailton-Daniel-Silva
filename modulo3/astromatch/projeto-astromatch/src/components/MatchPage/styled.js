import styled from "styled-components";

export const HeaderSection2 = styled.div`
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

export const MatchCard = styled.div`
width: 15%;
justify-content: space-between;
align-items: center;
display: flex;
padding: 8px;

> img {
    height: 50px;
    width: 50px;
}
`