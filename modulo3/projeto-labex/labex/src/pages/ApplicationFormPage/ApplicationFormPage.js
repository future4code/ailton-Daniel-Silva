import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goTo } from "../../routes/coordinator"
import { useState } from "react";
import axios from 'axios'
import useForm from "../../hooks/useForm";
import {
    Container,
    InputContainer,
    SendButton,
    GoBackButton,
    ApplicationContainer,
    TitleContainer
} from "./styled"

export const ApplicationFormPage = () => {

    const [application, setApplication] = useState({})

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const navigate = useNavigate()
    const pathParams = useParams()

    const applyToTrip = (event, id) => {

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ailton/trips/${pathParams.id}/apply`,
            form)
            .then((response) => {
                setApplication(response.data)
                console.log("deu bão:", response.data)
            })
            .catch((error) => {
                console.log(error.message)
            })

        event.preventDefault()
        console.log("forms enviado", form)
        cleanFields()
    }

    return (
        <Container>
            <ApplicationContainer>
                <TitleContainer>Faça sua aplicação</TitleContainer>
                <InputContainer onSubmit={applyToTrip}>
                    <input
                        name={"name"}
                        placeholder="Nome"
                        value={form.name}
                        onChange={onChange}
                        required
                    />
                    <input
                        name={"age"}
                        placeholder="Idade"
                        value={form.age}
                        onChange={onChange}
                        required
                        type={"number"}
                        min={18}
                    />
                    <input
                        name={"applicationText"}
                        placeholder="Texto de Aplicação"
                        value={form.applicationText}
                        onChange={onChange}
                        required
                        pattern={"^.{15,}"}
                        title={"A aplicação deve ter no mínimo 15 caracteres"}
                    />
                    <input
                        name={"profession"}
                        placeholder="Profissão"
                        form={form.profession}
                        onChange={onChange}
                        required
                    />
                    <input
                        name={"country"}
                        placeholder="País"
                        value={form.country}
                        onChange={onChange}
                        required
                    />
                    <SendButton>Enviar Aplicação</SendButton>
                </InputContainer>
            </ApplicationContainer>

            <GoBackButton onClick={() => goTo(navigate, "/trips/list")}>Voltar</GoBackButton>
        </Container>
    )
}