import React from "react";
import { Pie } from "react-chartjs-2";
import test from "../helpers/test.json";

const PieChart = () => {
  const dataPorcentage = [];
  const nameKr = [];
  const colors = [];
  let percentage = 0;
  let total = 100;

  const generateColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  function calcularPorcentajeKr() {
    test.krs.map((el) => {
        dataPorcentage.push(Math.round((el.percentageWeight / test.krs.length)*100)/100)
        nameKr.push(el.keyResult + " " + (Math.round((el.percentageWeight / test.krs.length)*100)/100)+"%")
        colors.push("#" + generateColor())
        });
  }

  function calcularPorcentaje() {
    test.krs.forEach((el) => (percentage += el.percentageWeight));
    return percentage = Math.round((percentage / test.krs.length)*100)/100;
  }

  calcularPorcentaje()
  calcularPorcentajeKr()
  dataPorcentage.push(total - percentage)
  nameKr.push("Por Completar")
  colors.push("#" + generateColor())

  const data = {
    datasets: [
      {
        label: "# of votes",
        data: dataPorcentage,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
    labels: nameKr,
  };

  const options = {
    legend: {
      display: true,
      labels: {
        fontColor: "rgb(255, 99, 132)",
      },
      position: "right",
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
