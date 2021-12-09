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

export const CandidatosPendentes = styled.div`
  margin: 0;
  border: 1px solid black;
  @media screen and (max-width: 900px){
    width: 60vw;
  }

  @media screen and (min-width: 901px){
    width: 20vw;
  }
  padding: 1vh;

`

export const ContainerButtons = styled.div`
  margin-left: 25%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 10vw;
  padding: 1vh;

    

`
export const Container2 = styled.div`
  display: flex;

`
export const ContainerDetails = styled.div`
    padding: 10px 20px;
    border-radius: 4px;
    margin: 15px 0;
    max-width: 500px;
`