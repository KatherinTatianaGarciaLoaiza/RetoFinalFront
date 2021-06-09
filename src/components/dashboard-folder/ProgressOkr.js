import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import test from "../helpers/test.json";

const ProgressOkr = ({progress}) => {
  let percentage = 0;

  function calcularPorcentaje() {
    test.krs.forEach((el) => (percentage += el.percentageWeight));
    return percentage = percentage / test.krs.length; 
  }

  return (
    <CircularProgressbar value={progress} text={`${progress}%`} />
  );
};

export default ProgressOkr;
