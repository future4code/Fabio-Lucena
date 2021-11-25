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



    render() {

        return (
            <div>

                <AddContainer>



                    <InputContainer>

                        <p>Artista: <b>{this.props.artista}</b></p>
                        <p>Nome da Música: <b>{this.props.nome}</b></p>
                        <audio controls="controls">
                            <source src={this.props.url} preload="preload" type="audio/mp3" />
                            seu navegador não suporta HTML5
                        </audio>

                    </InputContainer>
                </AddContainer>

            </div>
        );
    }
}

export default Lista;