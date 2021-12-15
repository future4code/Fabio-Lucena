import styled from "styled-components"

export const ContainerPrincipal = styled.div`
  margin: 0;
  border: 2px solid darkgray;  
  flex-grow: 5;
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  padding-top: 2px;
  box-shadow: 5px 10px #3f3f42;
  border-radius: 4%;
  background-color: darkorange;
  cursor: pointer;
 `

export const CandidatosPendentes = styled.div`
  margin: 0;
  @media screen and (max-width: 900px){
    width: 60vw;
  }

  @media screen and (min-width: 901px){
    width: 20vw;
  }
  padding: 1vh;

`

export const ContainerButtons = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 min-width: 10vw;
 padding: 1vh;
`
export const Container2 = styled.div`
 display: flex;
 flex-direction: row;
 width: 10vw;
 justify-content: space-between;
`

export const ContainerDetails = styled.div`
 padding: 10px 20px;
 border-radius: 4px;
 margin: 15px 0;
 max-width: 500px;
`

export const Button = styled.button`
 border-radius: 20px;
 background-color: #bda091;
 font-weight: bolder;
 min-height: 4vh;
 width: 4.5vw; 
 cursor: pointer;
`

export const Button2 = styled.button`
 border-radius: 20%;
 background-color: #bda091;
 font-weight: bolder;
 min-height: 4vh;
 width: 4.5vw; 
 cursor: pointer;
`

