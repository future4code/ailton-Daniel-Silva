import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
    HeaderSection1,
    MainContainer,
    HeaderText,
    HeaderButton
} from "./styled";

export default function ChoicesPage(props) {

    const [user, setUser] = useState("")

    useEffect(() => {
        const getProfileToChoose = (user) => {
            axios
                .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel/person`)
                .then(response => {
                    setUser(response.data)
                })
                .catch(error => {
                    console.log(error.message)
                })

        }
        getProfileToChoose(user)
    }, [user])

    return (
        <div>

            <HeaderSection1>
                <HeaderText>AstroMatch</HeaderText>
                <HeaderButton onClick={() => props.goToScreen("pagina match")}>Ver seus matchs!</HeaderButton>
            </HeaderSection1>

            <MainContainer>
                <p>{user.age}</p>
                <p>{user.photo}</p>
                <p>{user.bio}</p>
            </MainContainer>

        </div>
    )
}