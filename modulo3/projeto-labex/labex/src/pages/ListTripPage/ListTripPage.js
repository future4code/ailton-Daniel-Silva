import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"
import axios from 'axios'
import {
    TripContainer,
    TripsListContainer,
    Container,
    TextContainer,
    GoBackButton,
    ApplicationButton
} from "./styled"

export const ListTripPage = () => {

    const [trips, setTrips] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ailton/trips")
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
                            <ApplicationButton onClick={() => goTo(navigate, `/trips/application/${id}`)}>Fazer Aplicação</ApplicationButton>
                        </TripContainer>
                    )
                })}
            </TripsListContainer>
            <GoBackButton onClick={() => goTo(navigate, "/")}>Voltar</GoBackButton>
        </Container>
    )
}