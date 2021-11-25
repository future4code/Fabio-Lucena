import React from 'react';
import AddPlaylist from './components/AdicionarPlaylist/AddPlaylist'
import ListaPlaylist from './components/ListaPlaylists/ListaPlaylist'
import styled from 'styled-components';
import axios from 'axios';
import MusicaPlaylist from './components/MusicasPlaylist/MusicaPlaylist';
import GlobalStyle from './GlobalStyles';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

const AppContainer = styled.div`
  
`;

export class App extends React.Component {
  state = {
    cont: false,
    listaPlaylists: [],
    listaDeMusicas: [],
    inputNome: '',
    inputArtista: '', 
    inputLink: '',
    inputId: '',
    inputNomeMusica: ''
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
        pegaNomeDaLista={this.pegaNomeDaLista}
        idDaLista={this.idDaLista}
      />
    } else if (cont === true) {
      console.log(cont)
      return <MusicaPlaylist
        listaDeMusicas={this.state.listaDeMusicas}
        nomeDaLista={this.nomeDaLista}
        idLista={this.idLista}
        addTrackToPlaylist={this.addTrackToPlaylist}
        onTrocaValor={this.onTrocaValor}
        onAtualizaArtista={this.onAtualizaArtista}
        onAtualizaNomeMusica={this.onAtualizaNomeMusica}
        onAtualizaLink={this.onAtualizaLink}
        inputNome={this.state.inputNome}
        inputArtista={this.state.inputArtista}
        inputLink={this.state.inputLink}
        inputNomeMusica={this.state.inputNomeMusica}
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

  onAtualizaArtista = (event) => {
    this.setState({ inputArtista: event.target.value })
  }

  onAtualizaNomeMusica = (event) => {
    this.setState({ inputNomeMusica: event.target.value })
  }

  onAtualizaLink = (event) => {
    this.setState({ inputLink: event.target.value })
  }

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = async () => {
    try {
      const resposta = await axios
        .get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
          {
            headers: {
              Authorization: "fabio-lucena-carver"
            }
          }
        )
      this.setState({ listaPlaylists: resposta.data.result.list });
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
        
      });
  }


  nomeDaLista = ""
  idLista = ""

  pegaNomeDaLista = (nome) => {
    this.nomeDaLista = nome
    console.log(this.nomeDaLista)
    return this.nomeDaLista
  }

  idDaLista = (id) => {
    this.idLista = id
    console.log(id)
    return this.idLista
  }

  getPlaylistTracks = async (id) => {
    const playlistId = id
    try {
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
      this.setState({ listaDeMusicas: resposta.data.result.tracks });
      console.log(this.state.listaDeMusicas)
    } catch (erro) {
      alert("Erro ao carregar as musicas da Playlist")
    };
  };

  addTrackToPlaylist = (id) => {
    const body = {
      name: this.state.inputNomeMusica,
      artist: this.state.inputArtista,
      url: this.state.inputLink
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        body,
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
        this.setState({ inputNomeArtista: '' })
        this.setState({ inputNomeMusica: '' })
        this.setState({ inputLink: '' })
        alert("Música adicionada com sucesso")
        this.getPlaylistTracks(id)
      })
      .catch((err) => {

        alert("erro ao adicionar a música")

      });
  };





  render() {



    return (
      
      <AppContainer>

        {this.renderizaNaTela(this.state.cont)}

      </AppContainer> 
    );
  }
}

export default App;