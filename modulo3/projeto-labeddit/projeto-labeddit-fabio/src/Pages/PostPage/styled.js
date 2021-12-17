import styled from "styled-components"
export const ContainerNewPost = styled.div`
display: flex;
flex-direction: column;
border: 1px solid black;
justify-content: center;
flex-grow: 5;
align-items: center;
`

export const ContainerPrincipal = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
background-color: #cfcfcf;
`

export const Form = styled.form`
margin-top: 1vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border: 1px solid #66a3c4;
border-radius: 6px;
height: 10vh;
min-width: 30vw;
background-color: #f2f0f0;
padding: 1vh;
`

export const ListCards = styled.div`
margin: 15px;
border: 2px solid #66a3c4;  
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 5px 10px #3f3f42;
border-radius: 6px;
background-color: #f2f0f0;
width: 20vw;
cursor: pointer;
 `
export const ContainerCount = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;

` 
export const Img = styled.img`
height: 1em;
width: 1em;
cursor: pointer;
` 
export const Img2 = styled.img`
height: 1.5em;
width: 1.5em;
cursor: pointer;
padding: 1vh;
` 
export const Input = styled.input`
width: 90%;
margin-top: 1vh;
height: 5vh;
background-color: #cfcfcf;
border-radius: 6px;
padding: 1px;
`

export const Button = styled.button`
border-radius: 10px;
background-color: #66a3c4;
cursor: pointer;
`

export const Button2 = styled.button`
border-radius: 10px;
background-color: #66a3c4;
cursor: pointer;
align-self: center;
`
