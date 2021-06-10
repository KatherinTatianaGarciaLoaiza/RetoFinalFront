import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ krs }) => {
  let montArrayEnd = [];
  let montArrayStart = [];
  let montDif = [];
  let porcentDif = [];
  let basicPorcentage = [];
  krs.map((el) => {
    let parcialDate = el.startDate;
    montArrayStart.push(new Date(parcialDate));
  })

  krs.map((el) => {
    let parcialDate = el.endDate;

    basicPorcentage.push("0.0");
    montArrayEnd.push(new Date(parcialDate));
  })

  let minMontStart = new Date(Math.min.apply(null, montArrayStart));
  let maxMontEnd = new Date(Math.max.apply(null, montArrayEnd));
  let dif = maxMontEnd.getMonth() - minMontStart.getMonth();
  let numberOfPorcentage = 100 / dif;

  for (var i = 1; i <= dif; i++) {
    montDif.push("mes " + i);
  }

  for (var i = 0; i < dif; i++) {
    i === 0 ? porcentDif.push(numberOfPorcentage) : porcentDif.push(porcentDif[i - 1] + numberOfPorcentage);
  }
  return (
    <div id="bar-chart">
      <Bar
        data={{
          labels: montDif,
          datasets: [
            {
              label: "Progreso mensual",
              data: basicPorcentage,
              backgroundColor:
                "rgb(75, 73, 73)"
              ,
              borderColor: [
                "rgb(75, 73, 73)"
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {

            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;