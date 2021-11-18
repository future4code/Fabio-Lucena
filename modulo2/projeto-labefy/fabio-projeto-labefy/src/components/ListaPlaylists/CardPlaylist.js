import React from "react";
import styled from "styled-components";
import ListaPlaylist from './ListaPlaylist'

const ContainerFora = styled.div`
  padding: 5px;
  background-color: darkorange;
`;

const ItensContainer = styled.div`
width: 300px;
background-color: darkgray;
display: flex;
justify-content: space-between;
border: 1px solid black;
padding: 10px;
`;


export class CardPlaylist extends React.Component {

    funcaoAux3 = (id) => {
        this.props.onTrocaValor()
        this.props.getPlaylistTracks(id)
    }

    render() {
        const id = this.props.id
        return <ContainerFora>
            <ItensContainer key={this.props.id} onClick={() => this.funcaoAux3(id)}>
                {this.props.name}
                <button onClick={() => this.props.deletePlaylist(id)}>X</button>
            </ItensContainer>
        </ContainerFora>


    }
}
export default CardPlaylist;