import React, { Component, useContext, useEffect } from "react";
import Chart from "react-google-charts"
import GlobalStateContext from "../Global/GlobalStateContext";
import { useRequestData } from "../Hooks/useRequest";
import { Container } from "./styled";


const ChartGraphic = (props) => {
  const { states, setters, requests } = useContext(GlobalStateContext)

  useEffect(()=>{
    requests.getData()
  }, [])

  const participant = states.data? states.data : "carregando"

  const options = {
    title: "",
    pieHole: 0.4,
    is3D: false,
  }

  let labels = [
    ["Participant", "Participation"]
  ]

  participant.forEach(element => {
    labels.push([`${element.firstName + "" + element.lastName}`, element.participation])
  })


  return (


    <Container>

      <Chart chartType="PieChart" data={labels} options={options} width="800px" height="500px" />
    </Container>

  );

}

export default ChartGraphic;