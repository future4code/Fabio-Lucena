import React from 'react';
import AddPlaylist from './components/AdicionarPlaylist/AddPlaylist'
import ListaPlaylist from './components/ListaPlaylists/ListaPlaylist'
import styled from 'styled-components';
import axios from 'axios';
import MusicaPlaylist from './components/MusicasPlaylist/MusicaPlaylist';


export class App extends React.Component {
  state = {
    cont: false,
    listaPlaylists: [],
    listaDeMusicas: [],
    inputNome: '',
    inputId: ''
  }


  renderizaNaTela(cont) {

    console.log(cont)

    if (cont === false) {
      console.log(cont)
      return <ListaPlaylist
        listaPlaylists={this.state.listaPlaylists}
        onTrocaValor={this.onTrocaValor}
        inputNome={this.state.inputNome}
        onAtualizaNome={this.onAtualizaNome}
        createPlaylist={this.createPlaylist}
        deletePlaylist={this.deletePlaylist}
        getPlaylistTracks={this.getPlaylistTracks}
      />
    } else if (cont === true) {
      console.log(cont)
      return <MusicaPlaylist
        


      />
    }
  }

  onTrocaValor = () => {
    this.setState({ cont: !this.state.cont })
    console.log(this.state.cont)
  }

  onAtualizaNome = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  onAtualizaEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = async () => {
    try{
    const resposta = await axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "fabio-lucena-carver"
          }
        }
      )
        this.setState({ listaPlaylists: resposta.data.result.list});
      } catch (erro) {
        alert("Erro ao carregar a lista de Playlists")
      };
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputNome,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "fabio-lucena-carver"
          }
        }
      )
      .then((resposta) => {
        this.setState({ inputNome: '' })
        alert("Playlist adicionada com sucesso")
        this.getAllPlaylists()
      })
      .catch((err) => {
        
        alert("erro ao adicionar a playlist")
        
      });
  };

  deletePlaylist = (id) => {
    console.log(id)
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "fabio-lucena-carver"
          },
          data: {
            source: id
          }
        }
        
      )
      .then((resposta) => {
        alert("Playlist excluída")
        this.getAllPlaylists()
      })
      .catch((erro) => {
        // alert("Erro ao excluir usuário")
      });
  }

  getPlaylistTracks = async (id) => {
    try{
    const resposta = await axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "fabio-lucena-carver"
          },
          data: {
            source: id
          }
        }
      )
        this.setState({ listaDeMusicas: resposta.data.result.tracks});
        console.log(this.state.listaDeMusicas)
      } catch (erro) {
        alert("Erro ao carregar a lista de Playlists")
      };
  };





  render() {



    return (
      <div>

        {this.renderizaNaTela(this.state.cont)}





      </div>
    );
  }
}

export default App;