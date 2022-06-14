import React from 'react';
import './CardGrande.css'
import styled from 'styled-components'

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
    `
const ImgBigCard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;`

const NomeBigCard = styled.h4`
    margin-bottom: 15px;
    `

const divBigCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `    

function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImgBigCard src={ props.imagem } />
            <divBigCard>
                <NomeBigCard>{ props.nome }</NomeBigCard>
                <p>{ props.descricao }</p>
            </divBigCard>
        </BigCardContainer>
    )
}

export default CardGrande;