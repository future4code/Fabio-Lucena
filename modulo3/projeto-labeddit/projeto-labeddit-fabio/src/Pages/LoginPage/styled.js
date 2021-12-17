import styled from "styled-components"

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
background-color: #cfcfcf;
min-height: 100vh;
background-color: #cfcfcf;
align-items: center;
justify-content: center;
align-content: center;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border: 1px solid #66a3c4;
border-radius: 6px;
height: 25vh;
min-width: 30vw;
background-color: #f2f0f0;
padding: 1vh;
`

export const ContainerNewPost = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1vh;
`

export const Input = styled.input`
width: 90%;
height: 3vh;
background-color: #cfcfcf;
border-radius: 6px;
padding: 5px;

`

export const Button = styled.button`
border-radius: 10px;
background-color: #66a3c4;
cursor: pointer;
`