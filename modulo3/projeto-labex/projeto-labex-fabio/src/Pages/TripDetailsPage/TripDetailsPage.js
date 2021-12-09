import React from "react";
import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Container, ListCards, ContainerPrincipal, CandidatosPendentes, ContainerButtons, Container2, ContainerDetails } from "../TripDetailsPage/styled"
import { useNavigate, useParams } from "react-router-dom"
import { useRequestData2 } from "../../components/CustomHooks/UseRequestData";
import { URL_BASE } from "../../components/UrlBase";
import { GoToHomePage, GoToTripDetailsPage } from "../../route/RouteFunctions";
//useHistory foi substituido por useNavigate no router 6

export default function TripDetailsPage() {
  const navigate = useNavigate()
  const  { id }  = useParams()
  const url = URL_BASE
  const [tripList, loadingTripList, errorTripList] = useRequestData2(url+`/trip/`+id, {})

  // const token = localStorage.getItem("token")
  console.log(url+`/trip/`+id)
  // console.log(data)
  console.log(tripList)

  

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
                <button>Aprovar</button>
                <button>Rejeitar</button>
              </ContainerButtons>
            </Container2>
          </CandidatosPendentes>
        </li>
      </ul>
    )
  })

  console.log(tripList)

  return (
    <Container>

      <Header />

      <ContainerPrincipal>
        
        {loadingTripList && <p>Carregando...</p>}
        {!loadingTripList && errorTripList && <p>Ocorreu um erro</p>}
        {!loadingTripList && tripList && tripList.length === 0 && (
          <p>Não há viagens</p>
        )}
        {tripList && tripList.trip && <h1>{tripList.trip.name}</h1>}
        {tripList && tripList.trip && <ContainerDetails>
        <p>{tripList.trip.description}</p>
        <p>{tripList.trip.planet}</p>
        <p>{tripList.trip.durationInDays}</p>
        <p>{tripList.trip.date}</p> 
        </ContainerDetails>}

        <h3>Candidatos</h3>
        {candidates}
        <h3>Candidatos Aprovados</h3>
        <button onClick={() => GoToHomePage(navigate)}>voltar</button>
      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}