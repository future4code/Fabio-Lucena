import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Container, ListCards, ContainerPrincipal, Container2, Button, Button2 } from "../AdminHomePage/styled"
import { useNavigate } from "react-router-dom"
import { useRequestData } from "../../components/CustomHooks/UseRequestData";
import { URL_BASE } from "../../components/UrlBase";
import { GoToHomePage, GoToLoginPage, GoToTripDetailsPage, GoToCreateTripPage } from "../../route/RouteFunctions";
import useProtectedPage from "../../components/CustomHooks/useProtectedPage";
import { DeleteTrip } from "../../components/Requests";
//useHistory foi substituido por useNavigate no router 6

export default function AdminHomePage() {
  useProtectedPage()
  const navigate = useNavigate()
  const [tripList, loadingTripList, errorTripList, GetTrips] = useRequestData(`${URL_BASE}/trips`, {})

  const delTrip = (tripId) => {
    const mensagem = "viagem exluída com sucesso!"
    DeleteTrip(tripId, GetTrips, mensagem)
  }

  const logOut = (navigate) => {
    localStorage.removeItem("token")
    GoToLoginPage(navigate)
  }

  const list = tripList && tripList.map((trip) => {
    return (<ListCards>
      <p key={trip.id} onClick={() => GoToTripDetailsPage(navigate, trip.id)}>Nome: {trip.name}</p>
      <Button2 onClick={() => delTrip(trip.id)}>X</Button2>

    </ListCards>
    )
  })


  return (
    <Container>

      <Header />

      <ContainerPrincipal>
        <h2>Admin Home Page</h2>
        <Container2>
          <Button onClick={() => GoToCreateTripPage(navigate)}>Criar Viagem</Button>
          <Button onClick={() => logOut(navigate)}>Logout</Button>
        </Container2>
        <h3>Viagens:</h3>
        {loadingTripList && <p>Carregando...</p>}
        {!loadingTripList && errorTripList && <p>Ocorreu um erro</p>}
        {!loadingTripList && tripList && tripList.length === 0 && (
          <p>Não há viagens</p>
        )}
        {list}
        <Button onClick={() => GoToHomePage(navigate)}>voltar</Button>
      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}