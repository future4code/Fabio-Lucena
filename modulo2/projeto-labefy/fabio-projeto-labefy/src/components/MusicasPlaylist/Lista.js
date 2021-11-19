import React from "react";
import styled from "styled-components";
import ListaPlaylist from "../ListaPlaylists/ListaPlaylist";
import MusicaPlaylist from "./MusicaPlaylist";

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

export class Lista extends React.Component {

    funcaoAux2 = () => {

    }

    render() {
        const linkVideo = this.props.url
        return (
            <div>
                
                <AddContainer>



                    <InputContainer>

                        <p>Artista: <b>{this.props.artista}</b></p>
                        <p>Nome da Música: <b>{this.props.nome}</b></p>
                        <iframe src={this.props.url} width="100%" height="80" frameBorder="0"></iframe>
                        
                        
                    </InputContainer>
                </AddContainer>

            </div>
        );
    }
}

export default Lista;