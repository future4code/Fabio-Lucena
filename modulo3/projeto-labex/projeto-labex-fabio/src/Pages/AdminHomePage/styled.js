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
  min-height: 97vh;

`

export const ListCards = styled.div`
  margin: 10px;
  border: 2px solid darkgray;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding-top: 2px;
  padding-left: 2px;
  width: 20vw;
 `