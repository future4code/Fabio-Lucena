import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const MatchCard = (props) => {

    useEffect(()=>{
        props.getMatches()
    }, [])

    const telaMatches = props.matches.map((lista) => {
        return (
            <div>
                <p>{lista.name}</p>
                <p>{lista.age}</p>
            </div>
        )
    })

    return <div>
            {telaMatches}
        </div>
}

export default MatchCard;
