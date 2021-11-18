import React from "react";
import styled from "styled-components";
import App from "../../App";
import AddPlaylist from "../AdicionarPlaylist/AddPlaylist";
import CardPlaylist from './CardPlaylist'


const ListaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`
const LinhasContainer = styled.div`

padding: 10px;
`;


export class ListaPlaylist extends React.Component {

    state = {
        cont2: false
    }

    renderizaNaTela2 = (cont2) => {
        if (cont2 === false) {
            return <button onClick={this.alteraValor} >Inserir Nova Playlist</button>
        } else if (cont2 === true) {
            return <AddPlaylist 
                inputNome={this.props.inputNome}
                onAtualizaNome={this.props.onAtualizaNome}
                createPlaylist={this.props.createPlaylist}
                alteraValor={this.alteraValor}
                funcaoAux={this.funcaoAux}
            />
        }
    }

    alteraValor = () => {
        this.setState({ cont2: !this.state.cont2 })
    }

    funcaoAux = () =>{
        this.props.createPlaylist()
        this.alteraValor()
    }

    render() {

        const usuarios = this.props.listaPlaylists.map((lista) => {
            return <CardPlaylist
                name={lista.name}
                id={lista.id}
                deletePlaylist={this.props.deletePlaylist}
                onTrocaValor={this.props.onTrocaValor}
                getPlaylistTracks={this.props.getPlaylistTracks}
            />
        });

        return (
            <div>
                {/* <button onClick={this.props.onTrocaValor}>Inserir Novo Usuario</button> */}
                <ListaContainer>

                    <h2>Playlists:</h2>
                    <LinhasContainer>
                        {usuarios}
                    </LinhasContainer>

                    {this.renderizaNaTela2(this.state.cont2)}
                </ListaContainer>

            </div>
        );
    }
}
export default ListaPlaylist;