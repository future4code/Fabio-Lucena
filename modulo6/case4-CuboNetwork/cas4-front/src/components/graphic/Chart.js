import React, { Component } from "react";
import Chart from "react-google-charts"
import { Container} from "./styled";


const ChartGraphic = () => {
  
  const options = {
        title: "My Daily Activities",
        pieHole: 0.4,
        is3D: false,
      }

     const labels = [
        ["Participant", "Participation"],
        ['A', 30],
        ['B', 55],
        ['C', 41],
        ['D', 17],
        ['E', 15]
      ]
    
    return (
      
        
        <Container>

          <Chart chartType="PieChart" data={labels} options={options}  width="800px" height="500px"/>
        </Container>
     
    );
  
}

export default ChartGraphic;