import styled from "styled-components"

export const HeaderPrincipal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20vh;
    width: 100%;
    background-color: #8adaf2;
`

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 80%;
    /* padding: 5px; */
`
export const Input = styled.input`
    margin-left: 15px;
    height: 40px;
    width: 250px;
    border: 1px solid white;
`

export const Button = styled.button`
    margin-left: 15px;
    height: 45px;
    width: 70px;
    background-color: #8adaf2;
    border: 2px solid white;
    font-weight: 700;
    color: white;
    cursor: pointer;
`