import React from 'react';
import AddUsuario from './components/AddUsuario'
import ListaUsuarios from './components/ListaUsuarios'
import styled from 'styled-components';
import axios from 'axios';
import BotaoDelete from './components/BotaoDelete'

export class App extends React.Component {
  state = {
    cont: false,
    listaUsuarios: [],
    inputEmail: '',
    inputNome: '',
    inputId: ''
  }


  renderizaNaTela(cont) {

    console.log(cont)

    if (cont === false) {
      console.log(cont)
      return <AddUsuario
        onTrocaValor={this.onTrocaValor}
        inputNome={this.state.inputNome}
        onAtualizaNome={this.onAtualizaNome}
        inputEmail={this.state.inputEmail}
        onAtualizaEmail={this.onAtualizaEmail}
        createUser={this.createUser}
      />
    } else if (cont === true) {
      console.log(cont)
      return <ListaUsuarios
        onTrocaValor={this.onTrocaValor}
        // usuarios={this.usuarios}
        listaUsuarios={this.state.listaUsuarios}
        deleteUser={this.deleteUser}


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
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "fabio-lucena-carver"
          }
        }
      )
      .then((resposta) => {
        this.setState({ listaUsuarios: resposta.data});
      })
      .catch((erro) => {
        alert("Erro ao carregar a lista de usuários")
      });
  };

  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "fabio-lucena-carver"
          }
        }
      )
      .then((resposta) => {
        this.setState({ inputNome: '' })
        this.setState({ inputEmail: '' })
        alert("Usuário adicionado com sucesso")
        this.getAllUsers()
      })
      .catch((erro) => {
        alert("erro ao adicionar usuário")
      });
  };

  deleteUser = (id) => {
    console.log(id)
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
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
        alert("Usuario excluído")
        this.getAllUsers()
      })
      .catch((erro) => {
        alert("Erro ao excluir usuário")
      });
  }



  render() {



    return (
      <div>

        {this.renderizaNaTela(this.state.cont)}





      </div>
    );
  }
}

export default App;
