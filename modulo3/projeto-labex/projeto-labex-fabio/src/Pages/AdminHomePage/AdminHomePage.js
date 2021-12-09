import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Container, ListCards, ContainerPrincipal } from "../AdminHomePage/styled"
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
import { useRequestData } from "../../components/CustomHooks/UseRequestData";
import { URL_BASE } from "../../components/UrlBase";
import { GoToHomePage, GoToTripDetailsPage } from "../../route/RouteFunctions";
//useHistory foi substituido por useNavigate no router 6

export default function AdminHomePage() {
  const navigate = useNavigate()
  const [tripList, loadingTripList, errorTripList] = useRequestData(`${URL_BASE}/trips`, {})

  const list = tripList && tripList.map((trip) => {
    return (<ListCards>
      <p key={trip.id} onClick={()=>GoToTripDetailsPage(navigate, trip.id)}>Nome: {trip.name}</p>

    </ListCards>
    )
  })


  return (
    <Container>

      <Header />

      <ContainerPrincipal>
        <h2>Admin Home Page</h2>
        {loadingTripList && <p>Carregando...</p>}
        {!loadingTripList && errorTripList && <p>Ocorreu um erro</p>}
        {!loadingTripList && tripList && tripList.length === 0 && (
          <p>Não há viagens</p>
        )}
        {list}
        <button onClick={()=>GoToHomePage(navigate)}>voltar</button>
      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}