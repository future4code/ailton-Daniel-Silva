import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/coordinator"
import axios from "axios";
import useForm from "../../hooks/useForm";
import {
    LoginContainer,
    Container,
    InputContainer,
    LoginButton,
    GoBackButton
} from './styled'

export const LoginPage = () => {
    const navigate = useNavigate()

    const { form, onChange, cleanFields } = useForm({
        email: "",
        password: ""
    })

    const onSubmitLogin = (event) => {

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/daniel-ailton/login",
            form)
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                navigate("/admin/trips/list")
            })
            .catch((error) => {
                console.log("Deu ruim: ", error.response)
            })
        event.preventDefault()
        cleanFields()
    }

    return (
        <Container>

            <LoginContainer>
                <h1>Faça o Login</h1>
                
                    <InputContainer onClick={onSubmitLogin}>
                        <label>E-mail:</label>
                        <input
                            name={"email"}
                            placeholder="E-mail"
                            type="email"
                            value={form.email}
                            onChange={onChange}
                            required
                        />
                        <label>Senha:</label>
                        <input
                            name={"password"}
                            placeholder="Senha"
                            type="password"
                            value={form.password}
                            onChange={onChange}
                            required
                        />
                        <LoginButton>Entrar</LoginButton>
                    </InputContainer>
                


            </LoginContainer>

            <GoBackButton onClick={() => goTo(navigate, "/")}>Voltar</GoBackButton>
        </Container>
    )
}