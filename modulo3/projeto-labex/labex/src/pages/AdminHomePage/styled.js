import styled from "styled-components";
import fundoTrips from "../../img/fundo-trips.jpg"

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
background-image: url(${fundoTrips});
background-size: cover;
background-position: center;
align-items: center;
`

export const TripContainer = styled.div`
display: flex;
color: white;
border: 2px solid white;
width: 60%;
height: 15%;
align-items: center;
justify-content: space-around;
font-size: 20px;
`

export const TripListContainer = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
width: 60vw;
height: 60vh;
align-items: center;
overflow: auto;
`

export const TextContainer = styled.div`
color: white;
height: 16vh;
display: flex;
align-items: center;
justify-content: center;
`