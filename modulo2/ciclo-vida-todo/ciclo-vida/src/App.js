import './App.css';
import styled from 'styled-components';
import React from 'react';

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const MainContainer = styled.div `
 font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  `

export default class App extends React.Component {

  state = {
    tarefas: [
      {
        id: 1,
        texto: "matar o mano kura",
        completa: false
      }

    ],

    inputValue: "",
    filtro: ""
  }

  onChangeInputValue = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criarTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaTarefas = [...this.state.tarefas, novaTarefa]

    this.setState({ tarefas: novaListaTarefas })
    this.setState({ inputValue: "" })
  }

  selectTarefa = (id) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa, index) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaTarefas })
  }

  onChangeFilter = (event) => {
   
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })
    return (
      <MainContainer>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInputValue} />
          <button onClick={this.criarTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </MainContainer>
    )
  }
}
