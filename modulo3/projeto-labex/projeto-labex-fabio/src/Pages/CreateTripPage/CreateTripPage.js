import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import useForm from "../../components/CustomHooks/useForm";
import { Container, ContainerForms, FormCards, Input, Select } from "./styled";
import { URL_BASE } from "../../components/UrlBase";
import { useNavigate } from "react-router-dom"
import { useRequestData } from "../../components/CustomHooks/UseRequestData";
import { CreateTrip } from "../../components/Requests";
//useHistory foi substituido por useNavigate no router 6

export default function ApplicationFormPage() {
  const [tripsList] = useRequestData(`${URL_BASE}/trips`, {})
  const [id, setId] = useState("")
  const navigate = useNavigate()
  const { form, changeValues, clear } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

  const GoToListTripsPage = () => {
    navigate("/trips/list")
  }

  const sendForm = (event) => {
    event.preventDefault()
    const mensagem = "Viagem criada com sucesso!"
    CreateTrip(form, mensagem)
    clear()
  }


  const minDate = () => {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = dia + '/' + mes + '/' + ano;
    return dataAtual
  }

  const dataAtual = minDate()

  const planetes = ["Mercúrio", "Vênus", "Terra", "Marte", "Jupiter", "Saturno", "Urano", "Netuno", "Plutão"]

  const planetsOptions = planetes.map((p) => {
    return <option value={p}>{p}</option>
  })

  return (
    <Container>

      <Header />

      <ContainerForms>

        <h1>Inscreva-se para uma viagem</h1>
        <FormCards onSubmit={sendForm}>


          <Input
            placeholder={"Nome"}
            name={"name"}
            value={form.name}
            onChange={changeValues}
            required
            pattern={"^.{5,}$"}
          />
          <Select
            placeholder={"Planeta"}
            name={"planet"}
            defaultValue={""}
            onChange={changeValues}
            required
          >
            <option value={""} disabled>Escolha um Planeta</option>
            {planetsOptions}
          </Select>
          <Input
            placeholder={"Data"}
            type={"date"}
            name={"date"}
            value={form.date}
            onChange={changeValues}
            required
            min={dataAtual}
          />
          <Input
            placeholder={"Descrição"}
            name={"description"}
            value={form.description}
            onChange={changeValues}
            required
            pattern={"^.{30,}$"}
          />
          <Input
            placeholder={"Duração em dias"}
            name={"durationInDays"}
            value={form.durationInDays}
            onChange={changeValues}
            required
            min={50}
          />

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