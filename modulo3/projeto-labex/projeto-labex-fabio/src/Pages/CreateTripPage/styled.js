import styled from "styled-components"
import React from "react"

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
  min-height: 97vh;

`

export const Select = styled.select`
  width: 518px;
  height: 40px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  margin: 0px 0px 15px;
  background-color: darkgray;
`
export const Input = styled.input`
  width: 518px;
  height: 40px;
  border-radius: 10px;
  padding: 4px 8px;
  border-width: 1px;
  margin: 0px 0px 15px;
  background-color: darkgray;
`