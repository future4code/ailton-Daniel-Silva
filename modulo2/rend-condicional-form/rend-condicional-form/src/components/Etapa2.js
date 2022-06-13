import React, { Component } from 'react'
import styled from 'styled-components'
import Etapa3 from './Etapa3';
import Etapa1 from './Etapa1';

const ButtonTela = styled.button`
margin: 15px;
`

class Etapa2 extends Component {
    render() {
        return (
            <>
                <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>

                <h3>5. Qual o curso?</h3>
                <input 
                value={this.props.inputCurso}
                onChange={this.props.onChangeInputCurso}
                placeholder={"Curso"} />

                <h3>6. Qual a unidade de ensino?</h3>
                <input
                    value={this.props.inputUnidadeEnsino}
                    onChange={this.props.onChangeInputUnidadeEnsino}
                    placeholder={"Unidade de Ensino"} />

                <ButtonTela onClick={this.props.goTela3}> Próxima etapa</ButtonTela>
            </>
        )
    }
}

export default Etapa2;