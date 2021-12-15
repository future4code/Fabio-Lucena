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
        <div>


            <form onSubmit={sendForm}>
                <h3>Cadastre-se:</h3>

                <input
                    placeholder={"username"}
                    type={"text"}
                    name={"username"}
                    value={form.username}
                    onChange={changeValues}
                    required
                />

                <input
                    placeholder={"email"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={changeValues}
                    required
                />

                <input
                    placeholder={"senha"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={changeValues}
                    pattern={"^.{8,30}$"}
                    required
                />

                <button type={"submit"}>Cadastrar</button>
            </form>

            <button onClick={()=>navigate(-1)}>Voltar</button>


            

        </div>)
}