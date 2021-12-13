import react from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../../components/Requests";
import useForm from "../../components/useForm";

export default function LoginPage() {
    const navigate = useNavigate()
    const { form, changeValues } = useForm({ email: "", password: "" })

    const sendForm = (event) => {
        event.preventDefault()
        Login(form, navigate)
    }
    return (
        <div>


            <form>
                <h3>Login:</h3>
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

                <button type={"submit"}>Login</button>
            </form>

        </div>)
}