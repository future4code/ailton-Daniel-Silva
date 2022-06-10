import React, {Component} from 'react'
import styled from 'styled-components'

const BoxMensagem = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: lightcoral;
border-radius: 30px;
height: fit-content;
width: fit-content;
max-width: 75%;
min-width: 20%;
margin: 8px 30px;
`
const BoxTexto = styled.p`
word-break: break-all;
`
const BoxNick = styled.h4`

`

class MsgWhatsLab extends Component {
    render() {
    return ( <>
      <BoxMensagem key={this.props.index}>
      <BoxNick>{this.props.nomeUsuario}</BoxNick>
      <p>:</p>
      <BoxTexto>{this.props.textoMensagem}</BoxTexto>
      </BoxMensagem>
    </>
        

   )
  }  
}

export default MsgWhatsLab;
