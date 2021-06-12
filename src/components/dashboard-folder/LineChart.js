import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { getDataChart } from "../../actions/okrActions";

const LineChart = ({ krs, dispatch, progressData, okrId }) => {
  let montArrayEnd = [];
  let montArrayStart = [];
  let montDif = [];
  let porcentDif = [];
  let basicPorcentage = [];
  useEffect(() => {
    dispatch(getDataChart(okrId));
  }, []);

  const progressSort = progressData.actualPercentage.sort();

  krs.map((el) => {
    let parcialDate = el.startDate;
    montArrayStart.push(new Date(parcialDate));
  });

  krs.map((el) => {
    let parcialDate = el.endDate;
    montArrayEnd.push(new Date(parcialDate));
  });

  let minMontStart = new Date(Math.min.apply(null, montArrayStart));
  let maxMontEnd = new Date(Math.max.apply(null, montArrayEnd));
  let dif;
  if (maxMontEnd.getFullYear() > minMontStart.getFullYear()) {
    dif =
      (maxMontEnd.getFullYear() - minMontStart.getFullYear()) * 12 -
      minMontStart.getMonth();
  } else {
    dif = maxMontEnd.getMonth() - minMontStart.getMonth();
  }

  let numberOfPorcentage = 100 / dif;

  for (var i = 0; i <= dif; i++) {
    montDif.push("mes " + i);
  }

  for (var i = 0; i <= dif; i++) {
    i === 0
      ? porcentDif.push(100)
      : porcentDif.push(Math.abs(porcentDif[i - 1] - numberOfPorcentage));
  }

  for (var i = -1; i < progressSort.length; i++) {
    i === -1
      ? basicPorcentage.push(100)
      : basicPorcentage.push(Math.abs(100 - progressSort[i]));
  }

  return (
    <div id="bar-chart">
      <Line
        data={{
          labels: montDif,
          datasets: [
            {
              label: "% Progreso Ideal ",
              data: porcentDif,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgba(255, 99, 132, 0.2)",
              yAxisID: "y",
            },
            {
              label: "% Progreso",
              data: basicPorcentage,
              backgroundColor: "rgb(54, 162, 235)",
              borderColor: "rgba(54, 162, 235, 0.2)",
              yAxisID: "y",
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 25,
            },
          },
          scales: {
            y:
            {
              suggestedMin: 0,
              suggestedMax: 100
            }

          }
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  progressData: state.okr.DataProgressChart,
});

export default connect(mapStateToProps)(LineChart);
