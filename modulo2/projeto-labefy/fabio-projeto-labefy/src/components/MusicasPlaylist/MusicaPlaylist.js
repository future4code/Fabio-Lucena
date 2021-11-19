import React from "react";
import styled from "styled-components";
import AddTracks from "../AdicionarMusicas/AddTracks";
import ListaPlaylist from "../ListaPlaylists/ListaPlaylist";
import Lista from "./Lista";

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

    state = {
        cont3: false
    }

    renderizaNaTela3 = (cont3) => {
        if (cont3 === false) {
            return <button onClick={this.alteraValor2} >Inserir Nova Musica</button>
        } else if (cont3 === true) {
            return <AddTracks
                inputNome={this.props.inputNome}
                onAtualizaNome={this.props.onAtualizaNome}
                addTrackToPlaylist={this.props.addTrackToPlaylist}
                alteraValor2={this.alteraValor2}  
                funcaoAux3={this.funcaoAux3}              
                onAtualizaArtista={this.props.onAtualizaArtista}
                onAtualizaNomeMusica={this.props.onAtualizaNomeMusica}
                onAtualizaLink={this.props.onAtualizaLink}
                inputArtista={this.props.inputArtista}
                inputLink={this.props.inputLink}
                inputNomeMusica={this.props.inputNomeMusica}
                idLista={this.props.idLista}
            />
        }
    }

    alteraValor2 = () => {
        this.setState({ cont3: !this.state.cont3 })
    }

    funcaoAux3 = (id) =>{
        console.log(id)
        this.props.addTrackToPlaylist(id)
        this.alteraValor2()
    }


    render() {
        
        

        const listinha = this.props.listaDeMusicas.map((lista) => {
            
            return <Lista
                nome={lista.name}
                id={lista.id}
                url={lista.url}
                artista={lista.artist}
                nomeDaLista={this.props.nomeDaLista}
                idLista={this.props.idLista}
            />
        })

        return (
            <div>
                
                <AddContainer>
                    <button onClick={() => this.props.onTrocaValor()}>Voltar para Playlists</button>
                    
                    <h1>Playlist: {this.props.nomeDaLista}</h1>

                    <InputContainer>
                        {listinha}
                    </InputContainer>

                    {this.renderizaNaTela3(this.state.cont3)}


                </AddContainer>

            </div>
        );
    }
}

export default MusicaPlaylist;