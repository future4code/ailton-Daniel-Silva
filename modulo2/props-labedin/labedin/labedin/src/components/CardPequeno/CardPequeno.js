import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components'

const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
    `

const ImgSmallCard = styled.img`
    width: 30px;
    margin-right: 10px;
    border-radius: 10%;
    `

function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <ImgSmallCard src={props.imagem} />
            <b><p> {props.titulo}</p></b>
            <p>{props.descricao}</p>
        </SmallCardContainer>
    )
}

export default CardPequeno;