import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import StyledIndex from './StyledIndex'
import Body from './StyledIndex';
import App from './App';


ReactDOM.render(

  <React.StrictMode>
    <Body>
      <App />
    </Body>
  </React.StrictMode>,
  document.getElementById('root')
);



