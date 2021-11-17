import React from "react";
import styled from "styled-components";
import ListaUsuarios from "./ListaUsuarios";


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

export class BotaoDelete extends React.Component {

    render() {

        return  <li key={this.props.id}>{this.props.name} 
         {/* <button onClick={this.props.deleteUser(this.props.id)}>X</button> */}
         </li> 
            

    }
}
export default BotaoDelete;