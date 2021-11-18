import React from "react";
import styled from "styled-components";
import ListaUsuarios from "./ListaUsuarios";



const ItensContainer = styled.div`
width: 300px;
display: flex;
justify-content: space-between;
border: 1px solid black;
padding: 10px;
`;


export class BotaoDelete extends React.Component {
        
    render() {
        const id = this.props.id
        return  <ItensContainer key={this.props.id}>{this.props.name} 
         <button onClick={() => this.props.deleteUser(id)}>X</button>
         </ItensContainer> 
            

    }
}
export default BotaoDelete;