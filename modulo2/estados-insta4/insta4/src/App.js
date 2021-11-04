import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Roberval'}
          fotoUsuario={'https://picsum.photos/50/50?grayscale'}
          fotoPost={'https://picsum.photos/200/150/?blur=1'}
        />

        <Post
          nomeUsuario={'Telson'}
          fotoUsuario={'https://picsum.photos/50/50/?blur'}
          fotoPost={'https://picsum.photos/200/150?grayscale'}
        />
      </MainContainer>
    );
  }
}

export default App;
