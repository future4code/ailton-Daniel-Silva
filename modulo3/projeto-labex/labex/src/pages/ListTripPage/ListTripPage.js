import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"
import axios from 'axios'
import {
    TripContainer,
    TripsListContainer,
    Container,
    TextContainer
} from "./styled"

export const ListTripPage = () => {

    const [trips, setTrips] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips")
            .then((response) => {
                setTrips(response.data.trips)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    return (
        <Container>
            <TextContainer>
                <h1>Viagens Disponíveis</h1>
            </TextContainer>
            <TripsListContainer>
                {trips.map((trip) => {
                    const { id, name, description, planet, durationInDays, date } = trip
                    return (
                        <TripContainer key={id}>
                            <p>Nome: {name}</p>
                            <p>Descrição: {description}</p>
                            <p>Planeta: {planet}</p>
                            <p>Duração: {durationInDays} dias</p>
                            <p>Data: {date}</p>
                        </TripContainer>
                    )
                })}
            </TripsListContainer>
            <button onClick={() => goTo(navigate, "/")}>Voltar</button>
        </Container>
    )
}