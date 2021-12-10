import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Container, ContainerPrincipal, CandidatosPendentes, ContainerButtons, Container2, ContainerDetails } from "../TripDetailsPage/styled"
import { useNavigate, useParams } from "react-router-dom"
import { useRequestData2 } from "../../components/CustomHooks/UseRequestData";
import { URL_BASE } from "../../components/UrlBase";
import { GoToHomePage, GoToAdminHomePage } from "../../route/RouteFunctions";
import useProtectedPage from "../../components/CustomHooks/useProtectedPage";
import { DecideCandidate } from "../../components/Requests";
import { useEffect } from "react/cjs/react.development";
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
        <ul>
          <li>
            <CandidatosPendentes>
              <p key={trip.id} >Nome: {trip.name}</p>
              <p>id: {trip.profession}</p>
              <p>id: {trip.age}</p>
              <p>id: {trip.country}</p>
              <p>id: {trip.applicationText}</p>
              <Container2>
                <ContainerButtons>
                  <button onClick={() => aproove(trip.id, trip.length, candidatos)}>Aprovar</button>
                  <button onClick={() => reject(trip.id, trip.length, candidatos)}>Rejeitar</button>
                </ContainerButtons>
              </Container2>
            </CandidatosPendentes>
          </li>
        </ul>
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


  console.log(aproovCandidates)

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
        <button onClick={() => GoToHomePage(navigate)}>Home</button>
        <button onClick={() => GoToAdminHomePage(navigate)}>voltar</button>
      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}

