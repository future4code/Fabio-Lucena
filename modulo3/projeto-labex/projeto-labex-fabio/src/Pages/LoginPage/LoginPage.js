import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
import { ContainerPrincipal, FormCards, ContainerForms, Container, Select, Input } from "./styled";
import { Login } from "../../components/Requests"
import useForm from "../../components/CustomHooks/useForm"
import { useNavigate } from "react-router-dom"
import UseUnprotectedPage from "../../components/CustomHooks/UseUnprotectedPage";

//useHistory foi substituido por useNavigate no router 6

export default function LoginPage() {
  UseUnprotectedPage()
  const navigate = useNavigate()
  const { form, changeValues } = useForm({ email: "", password: "" })


  const sendForm = (event) => {
    console.log(form)
    event.preventDefault()
    Login(form, navigate)
  }

  return (
    <Container>

      <Header />

      <ContainerPrincipal>
        <FormCards onSubmit={sendForm}>

          <Input
            placeholder={"e-mail"}
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={changeValues}
            required
          />
          <Input
            placeholder={"password"}
            type={"password"}
            name={"password"}
            value={form.password}
            onChange={changeValues}
            required
          />

          <button type={"submit"}>Login</button>
        </FormCards>

      </ContainerPrincipal>

      <Footer />

    </Container>
  );
}