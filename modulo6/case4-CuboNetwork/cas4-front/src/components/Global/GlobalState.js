import axios from "axios";
import React, { useEffect, useState } from "react";
import { UseRequestData } from "../Hooks/useRequest";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [data, setData] = useState([])
    const [data2, setData2] = useState(false)
    const [data3, setData3] = useState(0)

    const getData = () => {

        axios
            .get("http://localhost:3003/participant/all")
            .then((response) => {
                setData(response.data.participantes);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getData();
    }, [data2]);

  

    const states = { data, data2, data3 }
    const setters = { setData, setData2 }
    const requests = { getData }

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;