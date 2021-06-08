import React from 'react';
import {Line} from 'react-chartjs-2';
import test from "../helpers/test.json";


const LineChart = () => {
let montArrayEnd = [];
let montArrayStart = [];
let montDif = [];
let porcentDif = [];
let basicPorcentage = [];
    test.krs.map((el) => {
        let  parcialDate = el.startDate;
        montArrayStart.push(new Date(parcialDate));
      }) 

      test.krs.map((el) => {
          let  parcialDate = el.endDate;
          let parcialPorcentage = el.percentageWeight
          basicPorcentage.push(parcialPorcentage);
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
    i === 0 ? porcentDif.push(0) : porcentDif.push(porcentDif[i -1] + numberOfPorcentage);
}
console.log(basicPorcentage);


    return(
<div className ="line-chart">
        <Line
          data={{
            labels: montDif,
            datasets: [
              {
                label: "# of Votes",
                data: porcentDif,
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
                yAxisID: "y-axis-1",
              },
              {
                label: "# of No Votes",
                data: basicPorcentage,
                fill: false,
                backgroundColor: "rgb(54, 162, 235)",
                borderColor: "rgba(54, 162, 235, 0.2)",
                yAxisID: "y-axis-2",
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

