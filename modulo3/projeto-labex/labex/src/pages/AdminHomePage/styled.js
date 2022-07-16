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
width: 70%;
height: 15%;
align-items: center;
justify-content: space-around;
font-size: 20px;
`

export const TripListContainer = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
width: 65vw;
height: 65vh;
align-items: center;
overflow: auto;
background-color: #0A0847;
opacity: 80%;
border: 2px solid white;
`

export const TextContainer = styled.div`
color: white;
height: 16vh;
display: flex;
align-items: center;
justify-content: center;
`

export const StyledButton = styled.button`
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

export const DetailAndDeleteButton = styled.button`
width: 18%;
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