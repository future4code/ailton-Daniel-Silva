import React from "react";
import { useNavigate } from "react-router-dom"
import { goTo } from "../../routes/coordinator"
import {
    Container,
    ButtonContainer,
    TextContainer,
    SiteButton
} from "./styled"

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <TextContainer>
            <p>LabeX</p>
            </TextContainer>
            <ButtonContainer>
                <SiteButton onClick={() => goTo(navigate, "/trips/list")}>Ver viagens</SiteButton>
                <SiteButton onClick={() => goTo(navigate, "/login")}>Área admin</SiteButton>
            </ButtonContainer>
        </Container>
    )
}