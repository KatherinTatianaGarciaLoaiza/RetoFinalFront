import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ krs }) => {
  
  let formula = (el) => {
    return Math.round((el.percentageWeight / 100) * el.progressKr * 100) / 100;
  };

  const dataPorcentage = [];
  const nameKr = [];
  const colors = [];
  let percentage = 0;
  let total = 100;

  const generateColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  function calcularPorcentajeKr() {
    krs.map((el) => {
      dataPorcentage.push(formula(el));
      nameKr.push(el.keyResult + " " + formula(el) + "%");
      colors.push("#" + generateColor());
    });
  }

  function calcularPorcentaje() {
    krs.forEach((el) => (percentage += formula(el)));
  }

  calcularPorcentaje();
  calcularPorcentajeKr();
  dataPorcentage.push(total - percentage);
  nameKr.push(`Por completar  ${total - percentage}%`);
  colors.push("#" + generateColor());

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
    plugins: {
      title: {
        display: true,
        text: "Progreso",
      },
      legend: {
        display: true,
        labels: {
          fontColor: "rgb(255, 99, 132)",
        },
        position: "bottom",
        align: "start",
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
