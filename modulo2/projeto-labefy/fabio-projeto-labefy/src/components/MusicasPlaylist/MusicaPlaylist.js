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

export class MusicaPlaylist extends React.Component {
    
    funcaoAux2 = () =>{

    }

    render(){
    
    return (
       <div>
       {/* <button onClick={this.props.onTrocaValor}>Lista de Usuarios</button> */}
       <AddContainer>
            
            <h2>Playlist: </h2>


           

        </AddContainer>

        </div>
    );
}
}

export default MusicaPlaylist;