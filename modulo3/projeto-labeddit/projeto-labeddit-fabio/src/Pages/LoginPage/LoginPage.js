import { ContainerPrincipal, Form, ContainerNewPost, Input, Button } from './styled'
import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Requests";
import useForm from "../../components/useForm";
import useUnprotectedPage from "../../components/useUnprotectedPage";
import { GoToSignupPage } from "../../Routes/RouteFunctions";

export default function LoginPage() {
    useUnprotectedPage()
    const navigate = useNavigate()
    const { form, changeValues } = useForm({ email: "", password: "" })

    const sendForm = (event) => {
        event.preventDefault()
        Login(form, navigate)
    }
    return (
        <ContainerPrincipal>

            <ContainerNewPost>
                <Form onSubmit={sendForm}>
                    <h3>Login:</h3>
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

                    <Button type={"submit"}>Login</Button>
                </Form>
            </ContainerNewPost>
            <Button onClick={() => GoToSignupPage(navigate)}>Cadastrar</Button>

        </ContainerPrincipal>)
}