import React from "react";
import styled from 'styled-components'
import { PerguntaAberta } from "./PerguntaAberta";
import { PerguntaOpcoes } from "./PerguntaOpcoes"

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InformSuperior = styled.div`
  padding-top: 1vh;
`



export function DadosGerais() {
  return (
    <ContainerPrincipal>
      <h1>ETAPA 1 - DADOS GERAIS</h1>

      <PerguntaAberta pergunta={"1. Qual seu nome?"} />
      <PerguntaAberta pergunta={"2. Qual sua idade?"} />
      <PerguntaAberta pergunta={"3. Qual seu email?"} />


      <InformSuperior>

        <PerguntaOpcoes pergunta={"4. Qual a sua escolaridade?"}
          opcoes={[
            "Ensino médio incompleto",
            "Ensino médio completo",
            "Ensino superior incompleto",
            "Ensino superior completo"
          ]} />

        {/* <select>
                <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select> */}
      </InformSuperior>

    </ContainerPrincipal>
  )

}

export default DadosGerais;