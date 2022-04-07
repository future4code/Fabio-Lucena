import React, { useState } from "react";
import { ContainerPrincipal, Loteria, Sidebar, Trevo1, Trevo2 } from "./styled";
import MegaSena from "../../img/MegaSena.svg"
import LotoFacil from "../../img/LotoFacil.svg"
import Path2 from "../../img/Path-2.svg"
import Path3 from "../../img/Path-3.svg"


export default function HomePage() {

const [sidebar, setSidebar] = useState(MegaSena)

    const onChangePage =(e)=>{
        setSidebar(e.target.value)
    }

    return (<ContainerPrincipal>
        <Sidebar 
            sidebarColor = {sidebar}
        >
            <select onChange={onChangePage}>
                <option value={MegaSena}>MEGA-SENA</option>
                <option value={LotoFacil}>Loto Facil</option>
            </select>
            <Loteria>MEGA-SENA</Loteria>
            <Trevo1 src={Path2} />
            <Trevo2 src={Path3}/>
        </Sidebar>
       
    </ContainerPrincipal>)
}