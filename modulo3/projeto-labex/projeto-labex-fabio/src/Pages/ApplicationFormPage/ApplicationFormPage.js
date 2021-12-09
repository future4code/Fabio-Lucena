import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { countries3 } from "./Countries"
import { FormCards, ContainerForms, Container, Select, Input } from "./styled";
import useForm from "../../components/CustomHooks/useForm";
import { URL_BASE } from "../../components/UrlBase";
import { useNavigate } from "react-router-dom"
import { useRequestData } from "../../components/CustomHooks/UseRequestData";
import { ApplyToTrip } from "../../components/Requests";
//useHistory foi substituido por useNavigate no router 6

export default function ApplicationFormPage() {
  const [tripsList] = useRequestData(`${URL_BASE}/trips`, {})
  const [id, setId] = useState("")
  const navigate = useNavigate()
  const {form, changeValues, clear} = useForm({ name: "", age: "", applicationText: "", profession: "", country: "" })

  const GoToListTripsPage = () => {
    navigate("/trips/list")
  }

  const sendForm = (event) => {
    event.preventDefault()
    ApplyToTrip(URL_BASE, form, id)
    setId("")
    clear()
  }

  const chooseTrip = (event) => {
    setId(event.target.value)
  }

  const tripsOptions = tripsList && tripsList.map((trip) => {
    return <option key={trip.id} value={trip.id}>{trip.name}</option>
  })

  return (
    <Container>

      <Header />

      <ContainerForms>

        <h1>Inscreva-se para uma viagem</h1>
        <FormCards onSubmit={sendForm}>

          <Select defaultValue="" onChange={chooseTrip}>
            <option value="" disabled>Escolha uma Viagem</option>
            {tripsOptions}
          </Select>
          <Input
            placeholder={"Nome"}
            name={"name"}
            value={form.name}
            onChange={changeValues}
            required
          />
          <Input
            placeholder={"Idade"}
            type={"number"}
            name={"age"}
            value={form.age}
            onChange={changeValues}
            required
            min={18}
          />
          <Input
            placeholder={"Texto de Candidatura"}
            name={"applicationText"}
            value={form.applicationText}
            onChange={changeValues}
            required
          />
          <Input
            placeholder={"Profissão"}
            name={"profession"}
            value={form.profession}
            onChange={changeValues}
            required
          />
          <Select
            defaultValue=""
            placeholder={"País"}
            name={"country"}
            value={form.country}
            onChange={changeValues}
            required
          >
            <option value={""} disabled>Escolha um País</option>
            {countries3.map((country) => {
              return <option value={country} key={country}>{country}</option>
            })}
          </Select>
          <div>
            <button onClick={() => navigate(-1)}>Voltar</button>
            <button type={"submit"}>Enviar</button>
          </div>

        </FormCards>



        <button onClick={() => GoToListTripsPage}>voltar</button>


      </ContainerForms>

      <Footer />

    </Container>
  );
}