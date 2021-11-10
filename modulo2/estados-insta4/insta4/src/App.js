import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const InputContainer = styled.div`
  padding: 2vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;  
`

class App extends React.Component {

  state = {
    posts: [
        {
          nomeUsuario: 'paulinha',
          fotoUsuario: 'https://picsum.photos/50/50',
          fotoPost: 'https://picsum.photos/200/150'
        },

        {
          nomeUsuario: 'Roberval', 
          fotoUsuario: 'https://picsum.photos/50/50?grayscale', 
          fotoPost: 'https://picsum.photos/200/150/?blur=1'
        },

        {  
        nomeUsuario: 'Telson',
        fotoUsuario: 'https://picsum.photos/50/50/?blur',
        fotoPost: 'https://picsum.photos/200/150?grayscale'
        }        
    ],

      inputNomeUsuario: "", 
      inputFotoUsuario: "",
      inputFotoPost: ""
    
  }

  adicionaPost = () =>{
    const novoPost = {
        nomeUsuario: this.state.inputNomeUsuario,
        fotoUsuario: this.state.inputFotoUsuario,
        fotoPost: this.state.inputFotoPost
    }

    const novosPosts = [...this.state.posts, novoPost]

    this.setState({posts: novosPosts})
    this.setState({inputNomeUsuario: ""})
    this.setState({inputFotoUsuario: ""})
    this.setState({inputFotoPost: ""})
  }

  onChangeNomeUsuario = (event) => {
    this.setState({inputNomeUsuario: event.target.value})
  }

  onChangeFotoUsuario = (event) => {
    this.setState({inputFotoUsuario: event.target.value})
  }

  onChangeFotoPost = (event) => {
    this.setState({inputFotoPost: event.target.value})
  }



  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return(  
          <Post
          {...post}
          />
        )
    })

    return (

     <MainContainer>     
        
        {listaDePosts}
        

        <InputContainer>
        <h3>Novo Post</h3>
        <div>
          <input
            value={this.state.inputNomeUsuario}
            onChange={this.onChangeNomeUsuario}
            placeholder={"Nome"}
          />

          <input
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder={"Foto do usuário"}
          />

          <input
            value={this.state.inputFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder={"Foto do Post"}
          />  
        </div>
          <div>
          <button onClick={this.adicionaPost}>Adicionar</button>
          </div>
      
      </InputContainer>

     </MainContainer>  
    );
  }
}

export default App;