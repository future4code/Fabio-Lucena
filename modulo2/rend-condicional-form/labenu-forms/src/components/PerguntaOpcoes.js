import React from "react";
import styled from 'styled-components'
import DadosGerais from "./DadosGerais";

const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


export function PerguntaOpcoes(props) {



    return (
        <ContainerPrincipal>

            <p>{props.pergunta}</p>
            <select>
                {/* <option value={props.opcoes}>{props.opcoes}</option> */}
                
                    {props.opcoes.map((opcao) => {
                        return <option value={opcao}>{opcao}</option>
                    })}

                

            </select>

        </ContainerPrincipal>
    )

}

export default PerguntaOpcoes