import React from "react";
import styled from "styled-components";
import App from "../App";
import BotaoDelete from "./BotaoDelete";

const ListaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: left;
padding: 10px;
`;

const BotaoDelete1 = styled.span`
  color: red;
  cursor: pointer;
`;

export class ListaUsuarios extends React.Component {


    render() {

        const usuarios = this.props.listaUsuarios.map((usuario) => {
            return <BotaoDelete
                name={usuario.name}
                id={usuario.id}
                deleteUser={this.props.deleteUser}
            />
        });

        return (
            <div>
                <button onClick={this.props.onTrocaValor}>Inserir Novo Usuario</button>
                <ListaContainer>

                    <h2>Usuários Cadastrados:</h2>
                    {usuarios}
                </ListaContainer>

            </div>
        );
    }
}
export default ListaUsuarios;