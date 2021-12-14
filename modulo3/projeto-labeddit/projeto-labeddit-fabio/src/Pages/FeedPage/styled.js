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
`

export const Form = styled.form`
margin-top: 1vh;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid black;
height: 30vh;
min-width: 20vw;
`

export const ListCards = styled.div`
margin: 15px;
border: 2px solid darkgray;  
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 5px 10px #3f3f42;
border-radius: 6px;
background-color: darkorange;
cursor: pointer;
width: 20vw;
 `

export const ContainerCount = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
` 
export const Img = styled.img`
height: 5vh;
width: 3vw;
` 
