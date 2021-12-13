import styled from "styled-components"

export const ContainerPrincipal = styled.div`
  margin: 0;
  border: 2px solid darkgray;  
  flex-grow: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
 `
export const FormCards = styled.form`
display: flex;
flex-direction: column;
align-items: center;
height: 50vh;
width: 500px;
padding: 10px;
`

export const ContainerForms = styled.div`
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
export const Input = styled.input`
  width: 39vw;
  height: 5vh;
  border-radius: 15px;
  padding: 4px 8px;
  border-width: 3px;
  margin: 0px 0px 15px;
  background-color: darkorange;
  color: black;
`
export const Button = styled.button`
border-radius: 20%;
background-color: #bda091;
font-weight: bolder;
min-height: 4vh;
width: 4.5vw; 
cursor: pointer;
`