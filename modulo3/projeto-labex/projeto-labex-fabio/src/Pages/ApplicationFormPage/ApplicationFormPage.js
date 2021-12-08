import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import ContainerPrincipal from "../../components/DivBody.js"
import { FormCards, ContainerForms, Container, Select, Input } from "./styled";
import styled from "styled-components";
// import useForms from "../components/CustomHooks/useForms";
import { URL_BASE } from "../../components/UrlBase";
import { useNavigate } from "react-router-dom"
import { useRequestData } from "../../components/CustomHooks/Requisicoes";
//useHistory foi substituido por useNavigate no router 6

export default function ApplicationFormPage() {
  const [tripsList] = useRequestData(`${URL_BASE}/trips`, {})
  const [id, setId] = useState("")
  // const {form, onChange, clear} = useForms({ name: "", age: "", applicationText: "", profession: "", country: "" })
  const navigate = useNavigate()
  const [forms, setForm] = useState({ name: "", age: "", applicationText: "", profession: "", country: "" })

  console.log(forms)
  const onChangeValues = (event) => {
    const { name, value } = event.target
    setForm({ ...forms, [name]: value })
  }



  const onClickSend = () => {
    console.log(tripsOptions)
  }

  const onChangeTrip = (e) => {
    setId(e.target.value)
  }


  const tripsOptions = tripsList && tripsList.map((trip) => {
    return <option key={trip.id}>{trip.name}</option>
  })

  return (
    <Container>

      <Header />

      <ContainerForms>

        <h1>Inscreva-se para uma viagem</h1>
        <FormCards onSubmit={onClickSend}>
          
            <Select defaultValue="" onChange={onChangeTrip}>
              <option value="" disabled>Escolha uma Viagem</option>
              {tripsOptions}
            </Select>
            <Input
              placeholder={"Nome"}
              name={"name"}
              value={forms.name}
              onChange={onChangeValues}
              required
            />
            <Input
              placeholder={"Idade"}
              type={"number"}
              name={"age"}
              value={forms.age}
              onChange={onChangeValues}
              required
              min={18}
            />
            <Input
              placeholder={"Texto de Candidatura"}
              name={"applicationText"}
              value={forms.applicationText}
              onChange={onChangeValues}
              required
            />
            <Input
              placeholder={"Profissão"}
              name={"profession"}
              value={forms.profession}
              onChange={onChangeValues}
              required
            />
            {/* <select
            placeholder={"País"}
            name={"country"}
            value={forms.country}
            onChange={onChangeValues}
            required
          >
            <option value={""} disabled>Escolha um País</option>
            {countries.map((country) => {
              return <option value={country} key={country}>{country}</option>
            })}
          </select> */}
            {/* <ButtonsContainer>
            <button onClick={() => goToListTripsPage(history)}>Voltar</button>
            <button type={"submit"}>Enviar</button>
          </ButtonsContainer>*/}
          
        </FormCards>


        {/* <input placeholder={"Viagem"} />
        <input placeholder={"Viagem"} />
        <input placeholder={"Viagem"} />
        <input placeholder={"Viagem"} />
        <input placeholder={"Viagem"} /> */}

        {/* <p>Lista de Viagens</p> */}
        <button onClick={() => navigate(-1)}>voltar</button>
        {/* <button onClick={}>Formulario de Viagens</button>  */}

      </ContainerForms>

      <Footer />

    </Container>
  );
}