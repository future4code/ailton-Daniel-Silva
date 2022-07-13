import styled from "styled-components";
import fundoTrips from "../../img/fundo-trips.jpg"

export const TripContainer = styled.div`
font-size: 20px;
display: flex;
flex-direction: column;
border: 2px solid gold;
width: 25vw;
height: 25vh;
align-items: center;
justify-content: center;
color: white;
gap: 16px;
box-shadow: 4px 4px gold;
`
export const TripsListContainer = styled.div`
width: 100vw;
height: 60vh;
display: flex;
justify-content: center;
gap: 12px;
overflow: auto;
`

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

export const TextContainer = styled.div`
color: white;
width: 100vw;
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
`