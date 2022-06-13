import React, { Component } from 'react'
import styled from 'styled-components'
import Etapa2 from './Etapa2';
import Final from './Final';

const ButtonTela = styled.button`
margin: 15px;
`

class Etapa3 extends Component {
    render() {
        return (
            <>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>

                <h3>5. Por que você não terminou um curso de graduação?</h3>
                <input 
                value={this.props.inputDesculpas}
                onChange={this.props.onChangeInputDesculpas}
                placeholder={"Por que você não terminou graduação"} />

                <h3>6. Você fez algum curso complementar?</h3>

                <select>
                    <option>Nenhum</option>
                    <option>Curso Técnico</option>
                    <option>Curso de Inglês</option>
                </select>

                <ButtonTela onClick={this.props.goTelaFinal}>Próxima etapa</ButtonTela>
            </>
        )
    }
}

export default Etapa3;