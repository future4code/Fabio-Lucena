import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"
import ContainerPrincipal from "../components/DivBody.js"
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
//useHistory foi substituido por useNavigate no router 6

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 97vh;
  
`

export default function HomePage() {

  const navigate = useNavigate()

  const GoToLoginPage = () =>{
    navigate("/login")
  }

  const GoToListTripsPage = () => {
    navigate("/trips/list")
  }
  return (
    <Container>

      <Header />

      <ContainerPrincipal>
        <p>Body</p>
        <div>
          <button onClick={() => GoToLoginPage()}>Admin</button>
          <button onClick={() => GoToListTripsPage()}>Lista de Viagens</button>
        </div>
      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}

