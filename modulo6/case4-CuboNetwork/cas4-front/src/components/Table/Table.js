import React, { useContext, useEffect } from "react";
import GlobalStateContext from "../Global/GlobalStateContext";
import ChartGraphic from "../graphic/ChartGraphic";
import { UseRequestData2 } from "../Hooks/useRequest";
import { TableChart, Td, Th } from "./styled";

const Table = () => {
    
    const { states, setters, requests } = useContext(GlobalStateContext)

    const participant = states.data

    useEffect(()=>{
        requests.getData()
        
    },[])

    const sum = (data) =>{
        let cont = 0
        for(const sum of data){
            cont += sum.participation
        }
        // console.log(cont)
        // setData3(cont)
        return cont
    } 

    const cont = sum(states.data)
    
    const deleteParticipant = (id)=>{
        UseRequestData2([], id)
        setters.setData2(!states.data2)
        console.log("deletei")
    }
    
    return (
        <>
        <TableChart>

            <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Participation</th>
            </tr>
            {!!participant ? states.data.map((item) => {
                let index = states.data.indexOf(item) + 1
                let sum = ((item.participation*100)/cont)
                return <tr key={item.id}>
                    <td>{index}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{`${Number(sum.toFixed(1))}%`}</td>
                    <Td onClick={()=> deleteParticipant(item.id)}>X</Td>
                </tr>

            }) : "carregando..."}

        </TableChart>

        <ChartGraphic data={participant}/>
        </>
    )
}

export default Table;