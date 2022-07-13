import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"
import { useEffect } from "react";
import {
    Container,
    TripContainer,
    TripListContainer,
    TextContainer
} from "./styled";
import axios from "axios";
import lixo from "../../img/lata-de-lixo.png"

export const AdminHomePage = () => {

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

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            navigate("/login")
        }
    }, [])

    return (
        <Container>
            <TextContainer>
                <h1> Painel Administrativo</h1>
            </TextContainer>

            <TripListContainer>
                {trips.map((trip) => {
                    const { id, name, description, planet, durationInDays, date } = trip
                    return (
                        <TripContainer key={id}>
                            <p>{name}</p>
                            <img src={lixo} />
                        </TripContainer>
                    )
                })}
            </TripListContainer>
            <button onClick={() => goTo(navigate, "/admin/trips/create")}>Criar Viagem</button>
            <button onClick={() => goTo(navigate, "/admin/trips/:id")}>Ver detalhes</button>
            <button onClick={() => goTo(navigate, "/login")}>Voltar</button>
        </Container>
    )
}