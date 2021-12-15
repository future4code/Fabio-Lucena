import styled from "styled-components"

export const ContainerPrincipal = styled.div`
  margin: 0;
  border: 2px solid darkgray;  
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
 `

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-color: darkgray;

`

export const ListCards = styled.div`
margin: 15px;
border: 2px solid darkgray;  
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 4px;
box-shadow: 5px 10px #3f3f42;
border-radius: 4%;
background-color: darkorange;
cursor: pointer;
min-height: 4.5vh;
min-width: 16vw;
font-weight: bolder;
`

 export const Container2 = styled.div`
 display: flex;
 flex-direction: row;
 width: 10vw;
 justify-content: space-between;
 `

 export const Button = styled.button`
 border-radius: 20%;
 background-color: #bda091;
 font-weight: bolder;
 min-height: 4vh;
 min-width: 4.5vw; 
 cursor: pointer;
 font-size: 0.8em;
`
export const Button2 = styled.button`
 border-radius: 20px;
 background-color: #bda091;
 font-weight: bolder;
 min-height: 4vh;
 width: 2vw; 
 cursor: pointer;

`

 