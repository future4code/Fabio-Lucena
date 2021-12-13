import styled from "styled-components"

export const ContainerPrincipal = styled.div`
  margin: 0; 
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
 `

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`

export const ListCards = styled.div`
  margin: 10px;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  padding-top: 2px;
  padding-left: 2px;
  width: 20vw;
 `

 export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 10vw;
  justify-content: space-between;
 `
export const Button = styled.button`
  border-radius: 20%;
  background-color: darkorange;
  font-weight: bolder;
  width: 4vw; 
  cursor: pointer;
`