import React from "react";
import { useEffect } from "react";
import styles from './styles.css'

const CardPessoas = (props) => {

    const aluno2 = props.aluno



    return (
        <div className="CardPessoas-div">
            <img className="FotoPerfil" src={props.profile.photo} />
            <p>{props.profile.name}</p>
            <p>{props.profile.age} anos</p>
            <p>{props.profile.bio}</p>
            <div className="BotaoMatch">
                <img className="ImagemMatch" src="https://cdn-icons-png.flaticon.com/512/148/148766.png" onClick={() => props.disMatch()} />
                <img className="ImagemMatch" src="https://cdn-icons-png.flaticon.com/512/148/148767.png" onClick={() => props.choosePerson(props.profile.id, true)} />
            </div>
        </div>
    )
}

export default CardPessoas