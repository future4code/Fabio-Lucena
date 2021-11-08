import React from "react";
import styled from 'styled-components'

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export function Agradecimentos() {
    return (
        <ContainerPrincipal>
            <h1>O FORMULÁRIO ACABOU</h1>
            <p>Muito obrigado por participar! Entraremos em contato!</p>

        </ContainerPrincipal>
    )

}

export default Agradecimentos;