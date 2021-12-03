import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import StylesMatchCard from "./StylesMatchCard.css"

const MatchCard = (props) => {

    useEffect(() => {
        props.getMatches()
    }, [])

    const telaMatches = props.matches.map((lista) => {
        return (
            <div className="Perfis">
                <img className="ImagemPerfil" src={lista.photo} />
                <p>{lista.name}</p>
                <p>{lista.age} anos</p>
            </div>
        )
    })

    return <div>
        <img className="ImagemPerfil" onClick={()=>props.Clear()} src="https://cdn-icons-png.flaticon.com/512/1276/1276379.png" alt="Apagar todos os matches" />
        <div className="MatchDiv">
            {telaMatches}
        </div>
    </div>
}

export default MatchCard;
