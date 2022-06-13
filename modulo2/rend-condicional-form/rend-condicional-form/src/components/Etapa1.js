import React, { Component } from 'react'
import styled from 'styled-components'
import Etapa2 from './Etapa2'

const ButtonTela = styled.button`
margin: 15px;
`

export default class Etapa1 extends Component {

    render() {
        return (
            <>
                <h2> ETAPA 1 - DADOS GERAIS </h2>

                <h3> 1. Qual o seu nome?</h3>
                <input
                    value={this.props.inputUsuario}
                    onChange={this.props.onChangeInputUsuario}
                    placeholder={"Nome"} />

                <h3> 2. Qual sua idade?</h3>
                <input
                    value={this.props.inputIdade}
                    onChange={this.props.onChangeInputIdade}
                    placeholder={"Idade"} />

                <h3> 3. Qual seu email?</h3>
                <input
                    value={this.props.inputEmail}
                    onChange={this.props.onChangeInputEmail}
                    placeholder={"E-mail"} />

                <h3> 4. Qual sua escolaridade?</h3>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>

                </select>
               
                <ButtonTela onClick={this.props.goTela2}> Próxima etapa</ButtonTela>
                
            </>
        )
    }
}

