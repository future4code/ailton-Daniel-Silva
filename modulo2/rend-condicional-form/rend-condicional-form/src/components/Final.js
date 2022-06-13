import React, { Component } from 'react'
import styled from 'styled-components'
import Etapa1 from './Etapa1';

const ButtonTela = styled.button`
margin: 15px;
`
class Final extends Component {
    render() {
        return (
            <>
                <h2>O FORMULÁRIO ACABOU</h2>

                <p> Muito obrigado por participar! Entraremos em contato!</p>

                <ButtonTela onClick={this.props.goTela1}>Voltar para o ínicio</ButtonTela>
            </>
        )
    }
}

export default Final;