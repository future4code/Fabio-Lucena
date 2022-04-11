import React, { useEffect, useState } from "react";
import { Aviso, ConcInfo, ContainerPrincipal, Elipse, Info, Loteria, Results, Select, Sidebar, Trevo1, Trevo2 } from "./styled";
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
    const [color, setColor] = useState(`#6BEFA3`)
    const [name, setName] = useState("MEGA-SENA")
    const [id, setId] = useState(2359)
    const [data, getData] = useRequestData([], `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${id}`)

    useEffect(() => {
        if (sidebar === LotoFacil) {
            setName("LOTOFACIL")
            setId("2200")
            setColor(`#DD7AC6`)
        } else if (sidebar === MegaSena) {
            setName("MEGA-SENA")
            setId("2359")
            setColor(`#6BEFA3`)
        } else if (sidebar === Quina) {
            setName("QUINA")
            setId("5534")
            setColor(`#8666EF`)
        } else if (sidebar === LotoMania) {
            setName("LOTOMANIA")
            setId("2167")
            setColor(`#FFAB64`)
        } else if (sidebar === TimeMania) {
            setName("TIMEMANIA")
            setId("1622")
            setColor(`#5AAD7D`)
        } else if (sidebar === DiaDeSorte) {
            setName("DIA DE SORTE")
            setId("440")
            setColor(`#BFAF83`)
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

    const resultados = () => {
        return (
            <Results>
                {!!data.numeros > 0 ? data.numeros.map((item) => {
                    return (

                        <Elipse
                            elipse={Ellipse}
                        >{item}</Elipse>

                    )
                }) : "carregando"}
            </Results>

        )
    }

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
            <Loteria color={color}>{name}</Loteria>
            <Trevo1 src={Path2} />
            <Trevo2 src={Path3} />
            <ConcInfo>CONCURSO</ConcInfo> 
            <Info>{concurso()}</Info>
            {resultados()}
            <Aviso>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</Aviso>
        </Sidebar>
        



    </ContainerPrincipal>)
}

