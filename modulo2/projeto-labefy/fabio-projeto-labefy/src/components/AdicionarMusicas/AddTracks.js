import React from "react";
import styled from "styled-components";
import MusicaPlaylist from "../MusicasPlaylist/MusicaPlaylist";


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

export class AddTracks extends React.Component {

    render() {

        return (
            <div>

                <AddContainer>
                    <InputContainer>
                        <p>Artista:</p>
                        <input placeholder="Artista" value={this.props.inputArtista} onChange={this.props.onAtualizaArtista} />
                    </InputContainer>

                    <InputContainer>
                        <p>Nome da Música:</p>
                        <input placeholder="Nome da Música" value={this.props.inputNomeMusica} onChange={this.props.onAtualizaNomeMusica} />
                    </InputContainer>

                    <InputContainer>
                        <p>Link do Audio:</p>
                        <input placeholder="Nome da Música" value={this.props.inputLink} onChange={this.props.onAtualizaLink} />
                    </InputContainer>

                    <InputContainer>
                        <button onClick={() => this.props.funcaoAux3(this.props.idLista)} >Inserir</button>
                    </InputContainer>




                </AddContainer>

            </div>
        );
    }
}

export default AddTracks;