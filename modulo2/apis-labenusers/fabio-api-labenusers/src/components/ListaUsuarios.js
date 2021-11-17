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


    // renderizaLista = (user) => {
    //     return <li key={user.id}>
    //     {user.name}
    //     <BotaoDelete onClick={this.props.deleteUser(user.id)}>
    //         X
    //     </BotaoDelete>
    // </li>
    // }

    render() {

        // const usuarios = this.props.listaUsuarios.map((usuarios) => {
        //     return <li key={usuarios.id}>
        //         {usuarios.name}  {usuarios.id}
        //         <button onClick={this.props.deleteUser(usuarios.id)}>X</button> 
        //         </li> 
            
        // });

        // {usuarios.id}

        const usuarios = this.props.listaUsuarios.map((usuario) => {
            return  <BotaoDelete 
            name={usuario.name}
            id={usuario.id}
            deleteUser={this.props.deleteUser}
            />
            {/* <li key={usuario.id}>{usuario.name}  </li> */}
        });

        return (
            <div>
                <button onClick={this.props.onTrocaValor}>Inserir Novo Usuario</button>
                <ListaContainer>

                <h2>Usuários Cadastrados:</h2>
                    
                    <ul>
                        
                        

                        {usuarios}

                    </ul>




                </ListaContainer>

            </div>
        );
    }
}
export default ListaUsuarios;