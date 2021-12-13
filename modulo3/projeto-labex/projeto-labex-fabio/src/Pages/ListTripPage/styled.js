import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 97vh;
  background-color: darkgray;
`

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 5px;  
`

export const ListCards = styled.div`
  margin: 15px;
  border: 2px solid darkgray;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2px;
  box-shadow: 5px 10px #3f3f42;
  border-radius: 4%;
  background-color: darkorange;
  cursor: pointer;
 `

 export const ContainerPrincipal = styled.div`
  margin: 0;
  border: 2px solid darkgray;  
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
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
 width: 4.5vw; 
 cursor: pointer;
`