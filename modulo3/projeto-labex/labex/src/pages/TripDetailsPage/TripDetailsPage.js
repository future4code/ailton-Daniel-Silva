import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { goTo } from "../../routes/coordinator"
import axios from 'axios'
import {
    Container,
    TripDetailsContainer,
    CandidatesContainer,
    GoBackButton,
    TextCandidates,
    TitleDetails
} from "./styled"

export const TripDetailsPage = () => {

    const [tripDetail, setTripDetail] = useState({})

    const navigate = useNavigate()
    const pathParams = useParams()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            navigate("/login")
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ailton/trip/${pathParams.id}`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setTripDetail(response.data.trip)
            })
            .catch((error) => {
                console.log("Deu ruim: ", error.response)
            })
    }, [])

    return (
        <Container>
            <TripDetailsContainer key={tripDetail.id}>
                <TitleDetails>Detalhes da Viagem</TitleDetails>
                <p>Viagem: {tripDetail.name}</p>
                <p>Planete: {tripDetail.planet}</p>
                <p>Descrição: {tripDetail.description}</p>
                <p>Data: {tripDetail.date}</p>
                <p>Duração em dias: {tripDetail.durationInDays}</p>
                <TextCandidates>
                    Candidatos Aplicados
                </TextCandidates>
                {tripDetail.candidates?.map((candidate) => {
                    return (
                        <CandidatesContainer key={candidate.name}>
                            <p>Nome: {candidate.name}</p>
                            <p>Idade: {candidate.age}</p>
                            <p>Profissão: {candidate.profession}</p>
                            <p>País: {candidate.country}</p>
                            <p>Texto de Aplicação: {candidate.applicationText}</p>
                        </CandidatesContainer>
                    )
                })}
            </TripDetailsContainer>
            <GoBackButton onClick={() => goTo(navigate, "/admin/trips/list")}>Voltar</GoBackButton>
        </Container>
    )
}