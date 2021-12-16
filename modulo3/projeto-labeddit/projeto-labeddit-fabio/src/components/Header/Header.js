import React from "react";
import { ContainerPrincipal } from "./styled";
import { useNavigate } from "react-router-dom";
import { GoToFeedPage } from "../../Routes/RouteFunctions";
export default function Header(){
    const navigate = useNavigate()

    return(
        <ContainerPrincipal>
            <p onClick={()=>GoToFeedPage(navigate)}>Labbedit</p>
        </ContainerPrincipal>
    )
}