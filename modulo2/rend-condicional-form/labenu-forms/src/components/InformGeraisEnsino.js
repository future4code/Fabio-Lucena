import React from "react";
import styled from 'styled-components'
import PerguntaOpcoes from "./PerguntaOpcoes";

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export function InformGeraisEnsino() {
    return (
        <ContainerPrincipal>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input name={"nome"} />


            <PerguntaOpcoes
                pergunta={"6. Você fez algum curso complementar?"}
                opcoes={["Curso técnico", "Curso de inglês", "Não fiz curso complementar"]}

            />

            {/* <p>6. Você fez algum curso complementar?</p>
            <select>
                <option value="Curso técnico">Curso técnico</option>
                <option value="Curso de inglês">Curso de inglês</option>
                <option value="Não fiz curso complementar">Não fiz curso complementar</option>
            </select> */}
        </ContainerPrincipal>
    )

}

export default InformGeraisEnsino;