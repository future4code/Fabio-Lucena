import { ContainerPrincipal, Form, ContainerNewPost, Input, Button } from './styled'
import { useNavigate } from "react-router-dom";
import { Signup } from "../../components/Requests";
import useForm from "../../components/useForm";

export default function SignupPage() {
    const navigate = useNavigate()
    const { form, changeValues } = useForm({ username: "", email: "", password: "" })

    const sendForm = (event) => {
        event.preventDefault()
        Signup(form, navigate)
    }
    return (
        <ContainerPrincipal>

            <ContainerNewPost>
                <Form onSubmit={sendForm}>
                    <h3>Cadastre-se:</h3>

                    <Input
                        placeholder={"username"}
                        type={"text"}
                        name={"username"}
                        value={form.username}
                        onChange={changeValues}
                        required
                    />

                    <Input
                        placeholder={"email"}
                        type={"email"}
                        name={"email"}
                        value={form.email}
                        onChange={changeValues}
                        required
                    />

                    <Input
                        placeholder={"senha"}
                        type={"password"}
                        name={"password"}
                        value={form.password}
                        onChange={changeValues}
                        pattern={"^.{8,30}$"}
                        required
                    />

                    <Button type={"submit"}>Cadastrar</Button>
                </Form>
            </ContainerNewPost>
            <Button onClick={() => navigate(-1)}>Voltar</Button>




        </ContainerPrincipal>)
}