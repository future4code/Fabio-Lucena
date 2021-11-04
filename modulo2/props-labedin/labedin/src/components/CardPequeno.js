import React from 'react';

function CardPequeno(props) {
    return (
        <div className="littlecard-container">
            <img src={ props.imagem } />
            <div>
            <p> <b>{ props.descricao }</b> { props.nome } </p>         
            </div>
        </div>
    )
}

export default CardPequeno;