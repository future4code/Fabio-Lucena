import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { ContainerPrincipal, Button, Container2, Container } from "./styled"
import { useNavigate } from "react-router-dom"
//useHistory foi substituido por useNavigate no router 6

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
          <Button onClick={() => GoToListTripsPage()}>Lista de Viagens</Button>
        </Container2>
      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}

