import styled from "styled-components";
import fundoTrips from "../../img/fundo-trips.jpg"

export const TripContainer = styled.div`
font-size: 20px;
display: flex;
flex-direction: column;
border: 2px solid white;
width: 25vw;
min-height:30vh;
align-items: center;
justify-content: center;
color: white;
gap: 16px;
box-shadow: 3px 1px white;
word-wrap: break-word;
word-break: break-all;
`
export const TripsListContainer = styled.div`
width: 60vw;
height: 60vh;
display: flex;
justify-content: center;
gap: 12px;
overflow: auto;
flex-wrap: wrap;
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

export const ApplicationButton = styled.button`
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