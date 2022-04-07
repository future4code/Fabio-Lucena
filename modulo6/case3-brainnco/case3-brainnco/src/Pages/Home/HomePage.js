import React, { useEffect, useState } from "react";
import { ConcInfo, ContainerPrincipal, Elipse, Info, Loteria, Results, Select, Sidebar, Trevo1, Trevo2 } from "./styled";
import MegaSena from "../../img/MegaSena.svg"
import LotoFacil from "../../img/LotoFacil.svg"
import Quina from "../../img/Quina.svg"
import LotoMania from "../../img/LotoMania.svg"
import TimeMania from "../../img/TimeMania.svg"
import DiaDeSorte from "../../img/DiaDeSorte.svg"
import Path2 from "../../img/Path-2.svg"
import Path3 from "../../img/Path-3.svg"
import Ellipse from "../../img/Ellipse1.svg"
import { useRequestData } from "../../Components/useRequest";




export default function HomePage() {

    const [sidebar, setSidebar] = useState(MegaSena)
    const [name, setName] = useState("MEGA-SENA")
    const [id, setId] = useState(2359)
    const [data, getData] = useRequestData([], `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`)
    console.log(data)

    useEffect(() => {
        if (sidebar === LotoFacil) {
            setName("LOTOFACIL")
        } else if (sidebar === MegaSena) {
            setName("MEGA-SENA")
            setId("2359")
        } else if (sidebar === Quina) {
            setName("QUINA")
            setId("5534")
        } else if (sidebar === LotoMania) {
            setName("LOTOMANIA")
        } else if (sidebar === TimeMania) {
            setName("TIMEMANIA")
        } else if (sidebar === DiaDeSorte) {
            setName("DIA DE SORTE")
        }
    }, [sidebar])

    const onChangePage = (e) => {
        setSidebar(e.target.value)
    }

    const concurso = () => {
        const id = data.id

        let date = data.data
        let dateTime = new Date(date)
        let options = {
            year: 'numeric', month: 'numeric', day: 'numeric'
        }
        let result = dateTime.toLocaleString('pt', options)


        return (`${id} - ${result}`)
    }

    // const resultados = ()=>{
    //     return (
    //         <Results>
    //             {data.numeros.map((item)=>{
    //                 return (
    //                     <Elipse elipse = {Ellipse}>{item}</Elipse> 
    //                 )
    //             })}
    //         </Results>
            
    //     )
    // }

    return (<ContainerPrincipal>
        <Sidebar
            sidebarColor={sidebar}
        >
            <Select onChange={onChangePage}>
                <option value={MegaSena}>MEGA-SENA</option>
                <option value={Quina}>QUINA</option>
                <option value={LotoFacil}>LOTOFACIL</option>
                <option value={LotoMania}>LOTOMANIA</option>
                <option value={TimeMania}>TIMEMANIA</option>
                <option value={DiaDeSorte}>DIA DE SORTE</option>
            </Select>
            <Loteria>{name}</Loteria>
            <Trevo1 src={Path2} />
            <Trevo2 src={Path3} />
            <ConcInfo>CONCURSO</ConcInfo> 
            <Info>{concurso()}</Info>
            {/* {resultados()} */}
            <Results>
                {data.numeros.map((item)=>{
                    return (
                        <Elipse elipse={Ellipse}>{item}</Elipse> 
                    )
                })}
            </Results>

        </Sidebar>

        {/* <Elipse elipse = {Ellipse}/> */}

    </ContainerPrincipal>)
}