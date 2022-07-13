import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goTo } from "../../routes/coordinator"
import axios from "axios";
import { 
    LoginContainer,
    Container,
    InputContainer,
    LoginButton,
    GoBackButton
} from './styled'

export const LoginPage = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {

        const body = {
            email: email,
            password: password
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login",
            body)
            .then((response) => {
                console.log("Deu certo: ", response.data.token)
                localStorage.setItem('token', response.data.token)
                navigate("/admin/trips/list")
            })
            .catch((error) => {
                console.log("Deu ruim: ", error.response)
                setEmail("")
                setPassword("")
            })
    }

    return (
        <Container>

            <LoginContainer>
                <h1>Faça o Login</h1>
                <InputContainer>
                <label>E-mail:</label>
                <input
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                />
                <label>Senha:</label>
                <input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                />
                </InputContainer>

                <LoginButton onClick={onSubmitLogin}>Entrar</LoginButton>
            </LoginContainer>

            <GoBackButton onClick={() => goTo(navigate, "/")}>Voltar</GoBackButton>
        </Container>
    )
}