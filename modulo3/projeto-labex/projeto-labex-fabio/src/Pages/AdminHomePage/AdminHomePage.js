import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Container, ListCards, ContainerPrincipal, Container2 } from "../AdminHomePage/styled"
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
      <button onClick={() => delTrip(trip.id)}>deletar</button>

    </ListCards>
    )
  })


  return (
    <Container>

      <Header />

      <ContainerPrincipal>
        <h2>Admin Home Page</h2>
        <Container2>
          <button onClick={()=> GoToCreateTripPage(navigate)}>Criar Viagem</button>
          <button onClick={()=> logOut(navigate)}>Logout</button>
        </Container2>
        <h3>Viagens:</h3>
        {loadingTripList && <p>Carregando...</p>}
        {!loadingTripList && errorTripList && <p>Ocorreu um erro</p>}
        {!loadingTripList && tripList && tripList.length === 0 && (
          <p>Não há viagens</p>
        )}
        {list}
        <button onClick={() => GoToHomePage(navigate)}>voltar</button>
      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}