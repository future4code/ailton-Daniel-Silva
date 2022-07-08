import React from "react";
import styled from "styled-components";
import {
    ButtonYes,
    ButtonNo,
    ButtonsContainer
} from './styled'

export default function ChooseButton(props) {
    return (
        <ButtonsContainer>
            <ButtonNo onClick={props.clickNo}>X</ButtonNo>
            <ButtonYes onClick={props.clickYes}>❤</ButtonYes>
        </ButtonsContainer>
    )
}