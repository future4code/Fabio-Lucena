import React, { useContext } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import useForm from "../Hooks/UseForm";
import { UseRequestData } from "../Hooks/useRequest";
import { HeaderPrincipal } from "./styled";

const Header = () => {
    const { states, setters, requests } = useContext(GlobalStateContext)
    const [form, handleInputChange, clear] = useForm({ firstName: "", lastName: "", participation: "" })

    const sendForm = (event) => {
        event.preventDefault();
        // Login(form, history);
        UseRequestData([], form)
        clear()
        setters.setData2(!states.data2)
    };

    return (
        <HeaderPrincipal>
            <form onSubmit={sendForm}>
                <input
                    placeholder="First Name"
                    type={"text"}
                    name={"firstName"}
                    value={form.firstName}
                    onChange={handleInputChange}
                    required
                />

                <input
                    placeholder="Last Name"
                    type={"text"}
                    name={"lastName"}
                    value={form.lastName}
                    onChange={handleInputChange}
                    required
                />

                <input
                    placeholder="Participation"
                    type={Number}
                    name={"participation"}
                    value={form.participation}
                    onChange={handleInputChange}
                    required
                />

                <button type="submit" >Enviar</button>
            </form>

        </HeaderPrincipal>
    )
}

export default Header;