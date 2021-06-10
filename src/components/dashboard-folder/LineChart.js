import React from 'react';
import {Line} from 'react-chartjs-2';


const LineChart = ({krs}) => {
let montArrayEnd = [];
let montArrayStart = [];
let montDif = [];
let porcentDif = [];
let basicPorcentage = [];
      krs.map((el) => {
        let  parcialDate = el.startDate;
        montArrayStart.push(new Date(parcialDate));
      }) 

      krs.map((el) => {
          let  parcialDate = el.endDate;
          
          basicPorcentage.push("100.0");
          montArrayEnd.push(new Date(parcialDate));
        }) 

let minMontStart = new Date(Math.min.apply(null,montArrayStart));        
let maxMontEnd = new Date(Math.max.apply(null,montArrayEnd));
let dif = maxMontEnd.getMonth() - minMontStart.getMonth();
let numberOfPorcentage = 100 / dif;

for (var i = 0; i <= dif;i++){
    montDif.push("mes " + i);
    
}



for(var i = 0; i <= dif; i++){
    i === 0 ? porcentDif.push(100) : porcentDif.push(porcentDif[i -1] - numberOfPorcentage);
}


    return(
<div className ="line-chart" id="burndown-chart">
        <Line
          data={{
            labels: montDif,
            datasets: [
              {
                label: "% Progreso Ideal ",
                data: porcentDif,
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
                yAxisID: "y-axis-1",
              },
              {
                label: "% Progreso",
                data: basicPorcentage,
                fill: false,
                backgroundColor: "rgb(54, 162, 235)",
                borderColor: "rgba(54, 162, 235, 0.2)",
                yAxisID: "y-axis-1",
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                  display: true,
                  text: 'Burndown Chart - OKR1'
              }
          },
          }}
        />
      </div>
    );
}

export default LineChart;

