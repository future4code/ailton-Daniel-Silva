import React, { Component } from 'react'
import styled from 'styled-components'

const BoxMensagemEu = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: darkkhaki;
border-radius: 30px;
height: fit-content;
width: fit-content;
max-width: 75%;
min-width: 20%;
margin: 8px 30px;
align-items: flex-end;
`
const BoxTexto = styled.p`
word-break: break-all;
`
const MainContainerEu = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
align-items: flex-end;`

class MsgWhatsLabEu extends Component {
    render() {
        return (
            <MainContainerEu>
                <BoxMensagemEu key={this.props.index} onDoubleClick={this.props.onDoubleClick}>
                    <BoxTexto> {this.props.textoMensagem}</BoxTexto>
                </BoxMensagemEu>
            </MainContainerEu>

        )
    }
}

export default MsgWhatsLabEu;