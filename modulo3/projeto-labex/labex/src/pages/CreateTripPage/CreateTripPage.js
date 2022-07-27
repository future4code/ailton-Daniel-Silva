import React from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"
import { useEffect, useState } from "react";
import axios from "axios";
import useForm from "../../hooks/useForm";
import {
    Container,
    InputContainer,
    SendButton,
    GoBackButton,
    CreateTripContainer,
    TitleContainer
} from "./styled"

export const CreateTripPage = () => {

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const [trip, setTrip] = useState({})

    const navigate = useNavigate()

    const createTrip = (event) => {

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ailton/trips",
            form, {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2NTc4MjM5ODV9.QmpuLoy7_tYgs2EUNu5fRoSt5HsWfanr0gkM8Cucp2M"
            }
        })
            .then((response) => {
                setTrip(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })

        event.preventDefault()
        cleanFields()
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            navigate("/login")
        }
    }, [])

    return (
        <Container>
            <CreateTripContainer>
                <TitleContainer>Crie sua viagem</TitleContainer>
                <InputContainer onSubmit={createTrip}>
                    <input
                        name={"name"}
                        placeholder="Nome"
                        value={form.name}
                        onChange={onChange}
                        required
                        pattern={"^.{3,}"}
                        title={"O nome deve ter no mínimo 3 letras"}
                    />
                    <input
                        name={"planet"}
                        placeholder="Planeta"
                        value={form.planet}
                        onChange={onChange}
                        required
                    />
                    <input
                        name={"date"}
                        placeholder="Data"
                        value={form.date}
                        onChange={onChange}
                        required
                        type={"date"}
                    />
                    <input
                        name={"description"}
                        placeholder="Descrição"
                        value={form.description}
                        onChange={onChange}
                        required
                    />
                    <input
                        name={"durationInDays"}
                        placeholder="Duração em dias"
                        value={form.durationInDays}
                        onChange={onChange}
                        required
                        type={"number"}
                    />
                    <SendButton>Criar Viagem</SendButton>
                </InputContainer>
            </CreateTripContainer>

            <GoBackButton onClick={() => goTo(navigate, "/admin/trips/list")}>Voltar</GoBackButton>
        </Container>
    )
}