import React from "react";
import { ContainerPrincipal, Button, Img, ParagrafoPersonalizado } from "./styled";
import { useNavigate } from "react-router-dom";
import { GoToFeedPage, GoToLoginPage } from "../../Routes/RouteFunctions";
import Logo from "../../img/roboLabeddit.svg"
export default function Header(){
    const navigate = useNavigate()

    const Logout = (navigate) =>{
        localStorage.removeItem("token")
                GoToLoginPage(navigate)
    }

    return(
        <ContainerPrincipal>
            <Img src={Logo} onClick={()=>GoToFeedPage(navigate)} />
            <ParagrafoPersonalizado onClick={()=>GoToFeedPage(navigate)}>Labbedit</ParagrafoPersonalizado>
            <Button onClick={()=> Logout(navigate)}>Logout</Button>
        </ContainerPrincipal>
    )
}