import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"
import ContainerPrincipal from "./components/DivBody.js"
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
//useHistory foi substituido por useNavigate no router 6

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  
`




export default function LoginPage() {
  return (
    <Container>

      <Header />

      <ContainerPrincipal>
        <p>login</p>
        
      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}