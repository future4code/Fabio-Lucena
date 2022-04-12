import React from "react";
import { TableChart, Td, Th } from "./styled";

const Table = () =>{
    return(
        <TableChart>
            <tr>
                <th></th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Participation</Th>
            </tr>
            <tr>
                <Td>1</Td>
                <Td><p>First Name</p></Td>
                <Td>Last Name</Td>
                <Td>Participation</Td>
            </tr>    
            <tr>
                <Td>1</Td>
                <Td><p>First Name</p></Td>
                <Td>Last Name</Td>
                <Td>Participation</Td>
            </tr>    
            <tr>
                <Td>1</Td>
                <Td><p>First Name</p></Td>
                <Td>Last Name</Td>
                <Td>Participation</Td>
            </tr>    
        </TableChart>
    )
}

export default Table;