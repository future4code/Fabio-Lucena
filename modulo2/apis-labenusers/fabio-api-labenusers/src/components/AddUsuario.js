import React from "react";
import styled from "styled-components";

const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InputContainer = styled.div`
display: flex;
flex-direction: column;
align-items: left;
padding: 10px;
`;

export class AddUsuario extends React.Component {
    
    render(){
    
    return (
       <div>
       <button onClick={this.props.onTrocaValor}>Lista de Usuarios</button>
       <AddContainer>
            <InputContainer>
                <p>Nome:</p>
                <input placeholder="Nome" value={this.props.inputNome} onChange={this.props.onAtualizaNome} />
            </InputContainer>
            <InputContainer>
                <p>Email:</p>
                <input placeholder="Email" value={this.props.inputEmail} onChange={this.props.onAtualizaEmail} />
            </InputContainer>
            <InputContainer>
                <button onClick={this.props.createUser}>Inserir</button>
            </InputContainer>


            

        </AddContainer>

        </div>
    );
}
}

export default AddUsuario;