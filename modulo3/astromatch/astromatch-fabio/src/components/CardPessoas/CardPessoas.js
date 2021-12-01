import React from "react";
import { useEffect } from "react";

const CardPessoas = (props) => {

    const aluno2 = props.aluno



    return (
        <div>
            <img src={props.profile.photo} />
            <p>{props.profile.name}</p>
            <p>{props.profile.age}</p>
            <p>{props.profile.bio}</p>
            <span>
                <button onClick={()=>props.disMatch()}>recusa</button>
                <button onClick={()=>props.choosePerson(props.profile.id, true)}>match</button>
            </span>
        </div>
    )
}

export default CardPessoas