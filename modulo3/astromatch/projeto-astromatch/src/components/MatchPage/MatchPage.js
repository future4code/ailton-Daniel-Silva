import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
    HeaderSection2,
    MainContainer,
    HeaderText,
    HeaderButton,
    MatchCard,
    MatchContainer
} from "./styled";

export default function MatchPage(props) {

    const [matchList, setMatchList] = useState([])

    const getMatches = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel-andrade-ailton/matches`)
            .then(response => {
                setMatchList(response.data.matches)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        getMatches()
    }, [matchList])

    return (
        <div>

            <HeaderSection2>
                <HeaderText>AstroMatch</HeaderText>
                <HeaderButton onClick={() => props.goToScreen("pagina escolhas")}>Voltar pro início</HeaderButton>
                <button onClick={props.clear}>Resetar</button>
            </HeaderSection2>

            <MainContainer>

                {(matchList.length >= 1) ?
                    <>
                        <MatchContainer>
                            {matchList.map((profile) => {
                                return (
                                    <MatchCard key={profile.id}>
                                        {profile.photo && <img src={profile.photo} alt={profile.name} />}
                                        {profile.name}
                                    </MatchCard>
                                )
                            })
                            }
                        </MatchContainer>
                    </>
                    : <p>Nenhum match!</p>}

            </MainContainer>

        </div>
    )
}