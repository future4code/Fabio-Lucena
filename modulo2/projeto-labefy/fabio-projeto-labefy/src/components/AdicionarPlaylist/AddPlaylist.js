import React from "react";
import styled from "styled-components";
import ListaPlaylist from "../ListaPlaylists/ListaPlaylist";

const AddContainer = styled.div`
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

export class AddPlaylist extends React.Component {
    
    render(){
    
    return (
       <div>
       
       <AddContainer>
            <InputContainer>
                <p>Nome:</p>
                <input placeholder="Nome" value={this.props.inputNome} onChange={this.props.onAtualizaNome} />
            </InputContainer>
           
            <InputContainer>
                <button onClick={this.props.funcaoAux} >Inserir</button>
            </InputContainer>


            

        </AddContainer>

        </div>
    );
}
}

export default AddPlaylist;