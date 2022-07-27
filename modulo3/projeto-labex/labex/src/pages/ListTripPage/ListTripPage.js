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
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        setIsLoading(true)
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ailton/trips")
            .then((response) => {
                setIsLoading(false)
                setTrips(response.data.trips)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error)
            })
    }, [])

    return (
        <Container>
            <TextContainer>
                <h1>Viagens Disponíveis</h1>
            </TextContainer>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro!</p>}
            {!isLoading && trips && trips.length > 0 &&
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
                </TripsListContainer>}
            {!isLoading && trips && trips.length === 0 && <p>Não existem viagens disponíveis</p>}

            <GoBackButton onClick={() => goTo(navigate, "/")}>Voltar</GoBackButton>
        </Container>
    )
}