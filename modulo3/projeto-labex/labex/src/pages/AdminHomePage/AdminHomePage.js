import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"
import { useEffect } from "react";
import {
    Container,
    TripContainer,
    TripListContainer,
    TextContainer,
    StyledButton,
    DetailAndDeleteButton
} from "./styled";
import axios from "axios";

export const AdminHomePage = () => {

    const [trips, setTrips] = useState([])
    const [deltrip, setDelTrip] = useState(0)
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
    }, [deltrip])

    const deleteTrip = (id) => {
        const token = localStorage.getItem('token')

        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ailton/trips/${id}`,{
            headers: { auth: token
        }})
        .then((response) => {
            alert("Viagem deletada!")
            setDelTrip(deltrip + 1)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

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
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Ocorreu um erro!</p>}
            {!isLoading && trips && trips.length > 0 &&

            <TripListContainer>
                {trips?.map((trip) => {
                    return (
                        <TripContainer key={trip.id}>
                            <p>{trip.name}</p>
                            <DetailAndDeleteButton onClick={() => goTo(navigate, `/admin/trips/${trip.id}`)}>Ver detalhes</DetailAndDeleteButton>
                            <DetailAndDeleteButton onClick={() => deleteTrip(trip.id)}>Deletar</DetailAndDeleteButton>
                        </TripContainer>
                    )
                })}
            </TripListContainer>}
            {!isLoading && trips && trips.length === 0 && <p>Não existem viagens disponíveis</p>}
            <StyledButton onClick={() => goTo(navigate, "/admin/trips/create")}>Criar Viagem</StyledButton>
            <StyledButton onClick={() => goTo(navigate, "/login")}>Voltar</StyledButton>
        </Container>
    )
}