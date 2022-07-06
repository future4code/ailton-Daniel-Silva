import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import {
    HeaderSection2,
    MainContainer,
    HeaderText,
    HeaderButton
} from "./styled";

export default function MatchPage(props) {
    return (
        <div>
            
            <HeaderSection2>
                <HeaderText>AstroMatch</HeaderText>
                <HeaderButton onClick={() => props.goToScreen("pagina escolhas")}>Voltar pro início</HeaderButton>
            </HeaderSection2>

            <MainContainer>
                <div>match page</div>
            </MainContainer>

        </div>
    )
}