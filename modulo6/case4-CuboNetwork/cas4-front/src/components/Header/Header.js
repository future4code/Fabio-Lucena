import axios from "axios";
import React, { useContext } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import useForm from "../Hooks/UseForm";
// import UseRequest, { UseRequestData } from "../Hooks/useRequest";
import { Button, Form, HeaderPrincipal, Input } from "./styled";

const Header = () => {
    const { states, setters, requests } = useContext(GlobalStateContext)
    const [form, handleInputChange, clear] = useForm({ firstName: "", lastName: "", participation: "" })

    const UseRequestData = (body) => {

        axios
            .post("https://case4-cubo.herokuapp.com/participant/add", body,
            {
                headers: {
                    contentType: "application/json"
                }
            })
            .then((response) => {
                setters.setData2(!states.data2)
                console.log("deu boa!")
        
            })
            .catch((error) => {
                console.log(error);
            });
   
}

    const sendForm = (event) => {
        event.preventDefault();
        UseRequestData(form)
        // setters.setData2(!states.data2)
        clear()
    };

    console.log(states.data2)
    return (
        <HeaderPrincipal>
            <Form onSubmit={sendForm}>
                <Input
                    placeholder="First Name"
                    type={"text"}
                    name={"firstName"}
                    value={form.firstName}
                    onChange={handleInputChange}
                    required
                />

                <Input
                    placeholder="Last Name"
                    type={"text"}
                    name={"lastName"}
                    value={form.lastName}
                    onChange={handleInputChange}
                    required
                />

                <Input
                    placeholder="Participation"
                    type={Number}
                    name={"participation"}
                    value={form.participation}
                    onChange={handleInputChange}
                    required
                />

                <Button type="submit" >Enviar</Button>
            </Form>

        </HeaderPrincipal>
    )
}

export default Header;