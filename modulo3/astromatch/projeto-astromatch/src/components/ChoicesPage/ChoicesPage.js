import React from "react";
import axios from "axios";
// import styled from "styled-components";
import ChooseButton from "../ChooseButton/ChooseButton"
import ProfileCard from "../ProfileCard/ProfileCard";
import { useState, useEffect } from "react";
import {
    HeaderSection1,
    MainContainer,
    HeaderText,
    HeaderButton,
    ContainerGeral
} from "./styled";

export default function ChoicesPage(props) {

    const [userProfile, setUserProfile] = useState(undefined)


    const getProfileToChoose = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:daniel/person`)
            .then(response => {
                setUserProfile(response.data.profile)
            })

            .catch(error => {
                console.log(error.message)
            })
    }

    const choosePerson = (choice) => {

        const body = {
            id: userProfile.id,
            choice: choice
        }

        axios
            .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-andrade-ailton/choose-person`
                , body)
            .then(response => {
                getProfileToChoose()
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const clickYes = () => {
        choosePerson(true)
    }

    const clickNo = () => {
        choosePerson(false)
    }

    return (
        <ContainerGeral>
           
            <HeaderSection1>
                <HeaderText>AstroMatch</HeaderText>
                <HeaderButton onClick={() => props.goToScreen("pagina match")}>Ver seus matchs!</HeaderButton>
                <button onClick={props.clear}>Resetar</button>
            </HeaderSection1>

            <MainContainer>
                
                {userProfile && (
                    <>
                        <ProfileCard profile={userProfile} />
                        <div>
                            <ChooseButton clickYes={clickYes} clickNo={clickNo} />
                        </div>
                    </>
                )}

            </MainContainer>


        </ContainerGeral>
    )
}