import styled from "styled-components";

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
height: 70vh;
width: 30vw;

> img {
    height: 60vh;
    width: 25vw;
}
`
export const NameAndAge = styled.div`
width: 30vw;
display: flex;
justify-content: space-around;
align-items: center;
`