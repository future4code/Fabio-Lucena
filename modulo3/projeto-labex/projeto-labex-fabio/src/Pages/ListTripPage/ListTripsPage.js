import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { Container, ContainerPrincipal, ListCards, Container2, Button } from '../ListTripPage/styled'
import { useNavigate } from "react-router-dom"
import { URL_BASE } from "../../components/UrlBase";
import { useRequestData } from "../../components/CustomHooks/UseRequestData";
//useHistory foi substituido por useNavigate no router 6



export default function ListTripsPage() {
    const [tripList, loadingTripList, errorTripList] = useRequestData(`${URL_BASE}/trips`)
    const navigate = useNavigate()

    const GoBack = (page) => {
        navigate(page)
    }

    const GoApplicationForm = () => {
        navigate('/trips/application')
    }

    const list = tripList && tripList.map((trip) => {
        return (<ListCards>
            <p key={trip.id}>Nome: {trip.name}</p>
            <p key={trip.id}>Descrição: {trip.description}</p>
            <p key={trip.id}>Planeta: {trip.planet}</p>
            <p key={trip.id}>Duração: {trip.durationInDays}</p>
            <p key={trip.id}>Data: {trip.date}</p>
        </ListCards>
        )
    })

    return (
        <Container>

            <Header />

            <ContainerPrincipal>

                <h2>Lista de Viagens</h2>
                {loadingTripList && <p>Carregando...</p>}
                {!loadingTripList && errorTripList && <p>Ocorreu um erro</p>}
                {!loadingTripList && tripList && tripList.length === 0 && (
                    <p>Não há viagens</p>
                )}
                <p>{list}</p>
                <Container2>
                    <Button onClick={() => GoBack(-1)}>voltar</Button>
                    <Button onClick={() => GoApplicationForm()}>Formulario de Viagens</Button>
                </Container2>
            </ContainerPrincipal>

            <Footer />

        </Container>
    );
}