import React from "react";
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export function EnsinoSuperior() {
    return (
        <ContainerPrincipal>
            <h1>ETAPA 2 - INFORMAÇÕES ENSINO SUPERIOR</h1>
            <p>5. Qual Curso?</p>
            <input name={"nome"} />

            <p>6. Qual unidade de ensino?</p>
            <input name={"nome"} />
        </ContainerPrincipal>
    )

}

export default EnsinoSuperior;