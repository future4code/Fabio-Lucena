import React from "react";
import styled from 'styled-components'
import DadosGerais from "./DadosGerais";

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export function PerguntaAberta(props) {
    return (
        <ContainerPrincipal>

            <p>{props.pergunta}</p>
            <input name={"nome"} />

        </ContainerPrincipal>
    )

}

export default PerguntaAberta