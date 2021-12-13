import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Container, ContainerPrincipal, CandidatosPendentes, ContainerButtons, Container2, ContainerDetails, ListCards, Button, Button2 } from "../TripDetailsPage/styled"
import { useNavigate, useParams } from "react-router-dom"
import { useRequestData2 } from "../../components/CustomHooks/UseRequestData";
import { URL_BASE } from "../../components/UrlBase";
import { GoToHomePage, GoToAdminHomePage } from "../../route/RouteFunctions";
import useProtectedPage from "../../components/CustomHooks/useProtectedPage";
import { DecideCandidate } from "../../components/Requests";
//useHistory foi substituido por useNavigate no router 6

export default function TripDetailsPage() {
  useProtectedPage()

  const navigate = useNavigate()
  const url = URL_BASE
  const { id } = useParams()
  const [tripList, loadingTripList, errorTripList, GetTrips2] = useRequestData2(url + `/trip/` + id, {})

  const reject = (candidateId) => {
    const mensagem = "Candidato foi rejeitado!"
    const body = {
      "approve": false
    }
    DecideCandidate(body, tripList.trip.id, candidateId, GetTrips2, mensagem)

  }
  const aproove = (candidateId) => {
    const mensagem = "Candidato aprovado!"
    const body = {
      "approve": true
    }
    DecideCandidate(body, tripList.trip.id, candidateId, GetTrips2, mensagem)
  }

  const candidatos = () => {
    const candidates = tripList && tripList.trip && tripList.trip.candidates.map((trip) => {
      return (
        <ListCards>
          <CandidatosPendentes>
            <p key={trip.id} ><b>Nome:</b> {trip.name}</p>
            <p><b>Profissão:</b> {trip.profession}</p>
            <p><b>Idade:</b> {trip.age}</p>
            <p><b>País:</b> {trip.country}</p>
            <p><b>Texto de Aplicação:</b> {trip.applicationText}</p>
              <ContainerButtons>
                <Button onClick={() => aproove(trip.id, trip.length, candidatos)}>Aprovar</Button>
                <Button onClick={() => reject(trip.id, trip.length, candidatos)}>Rejeitar</Button>
              </ContainerButtons>
          </CandidatosPendentes>
        </ListCards>
      )
    })
    return candidates
  }

  const aproovCandidates = tripList && tripList.trip.approved && tripList.trip.approved.map((trip) => {
    return (
      <ul>
        <li>
          <p key={trip.id} >Nome: {trip.name}</p>
          <p>Idade: {trip.age}</p>
          <p>País: {trip.country}</p>
        </li>
      </ul>
    )
  })

  return (
    <Container>

      <Header />

      <ContainerPrincipal>

        {loadingTripList && <p>Carregando...</p>}
        {!loadingTripList && errorTripList && <p>Ocorreu um erro</p>}
        {tripList && tripList.trip && <h1>{tripList.trip.name}</h1>}
        {tripList && tripList.trip && <ContainerDetails>
          <p><b>Descrição:</b> {tripList.trip.description}</p>
          <p><b>Planeta:</b> {tripList.trip.planet}</p>
          <p><b>Duração:</b> {tripList.trip.durationInDays}</p>
          <p><b>Data:</b> {tripList.trip.date}</p>
        </ContainerDetails>}


        {tripList && (tripList.trip.candidates.length > 0) && <h3>Candidatos</h3>}

        {tripList && (tripList.trip.candidates) && candidatos()}
        {candidatos()}

        {tripList && tripList.trip.approved.length > 0 && <h3>Candidatos Aprovados</h3>}
        {aproovCandidates}
        <Container2>
          <Button2 onClick={() => GoToHomePage(navigate)}>Home</Button2>
          <Button2 onClick={() => GoToAdminHomePage(navigate)}>voltar</Button2>
        </Container2>
      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}

