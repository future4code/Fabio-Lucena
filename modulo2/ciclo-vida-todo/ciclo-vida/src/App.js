import React from 'react'
import styled from 'styled-components'

const AppDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

`


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

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ""
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      this.salvarLocalStrg()
    }
  };

  salvarLocalStrg = () => {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  }

  componentDidMount() {
    this.pegarLocarStrg()
  };

  pegarLocarStrg = () => {
    const tarefasStorage = localStorage.getItem("tarefas")
    const tarefasObjeto = JSON.parse(tarefasStorage)
    this.setState({
      tarefas: (tarefasObjeto === null)? this.state.tarefas : tarefasObjeto    
    })
  }

  onChangeInput = (event) => {
    console.log(event.target.value)
    this.setState({ inputValue: event.target.value })
    console.log(this.state.inputValue)

  }

  criaTarefa = () => {
    let novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const copiaTarefa = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: copiaTarefa })
    this.setState({ inputValue: "" })
  }

  selectTarefa = (id) => {
    const alteraTarefa = this.state.tarefas.map((tarefaId) => {
      if (id === tarefaId.id) {
        const novaTarefa2 = {
          ...tarefaId,
          completa: !tarefaId.completa
        }

        return novaTarefa2
      } else {
        return tarefaId
      }

    })

    this.setState({ tarefas: alteraTarefa })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
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
      <AppDiv>
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
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
      </AppDiv>
    )
  }
}

export default App
