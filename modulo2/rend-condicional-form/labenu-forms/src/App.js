import React from 'react';
import './App.css';
import DadosGerais from '../src/components/DadosGerais';
import styled from 'styled-components'
import EnsinoSuperior from './components/EnsinoSuperior';
import InformGeraisEnsino from './components/InformGeraisEnsino';
import Agradecimentos from './components/Agradecimentos';
import PerguntaAberta from './components/PerguntaAberta';

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BotaoNext = styled.div`
  padding-top: 2vh;
`

class App extends React.Component {
  state = {
    etapa: 1
  }

  etapaForm = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />
      case 2:
        return <EnsinoSuperior />
      case 3:
        return <InformGeraisEnsino />
      case 4:
        return <Agradecimentos />
    }
  }

  acrescentaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
    console.log(this.state.etapa)
  }



  render() {
    return (
      <ContainerPrincipal>

        <this.etapaForm />

        <BotaoNext>
          {(this.state.etapa < 4) ? <button onClick={this.acrescentaEtapa}>Próxima etapa</button> : ""}
        </BotaoNext>

      </ContainerPrincipal>
    );
  }
}

export default App;
