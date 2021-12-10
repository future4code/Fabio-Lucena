import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { ContainerPrincipal, Button, Container2 } from "./styled"
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import ContainedButtons from "../../components/ContainedButtons";
//useHistory foi substituido por useNavigate no router 6

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 98vh;
  height: 100%
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
        <Container2>
          <Button onClick={() => GoToLoginPage()}>Admin</Button>
          <button onClick={() => GoToListTripsPage()}>Lista de Viagens</button>
        </Container2>
      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}

