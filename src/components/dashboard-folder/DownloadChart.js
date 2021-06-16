import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import CsvDownloader from "react-csv-downloader";
import { exportComponentAsJPEG } from 'react-component-export-image';

const DownloadChart = ({ data, burnDownChart, barChart, pieChart }) => {

  let csvString = [];
  csvString = [
    ["Peso Kr ", "Responsable Kr ", "Fecha Inicio ", "Fecha Fin"],
    ...data.krs.map((item) => [
      item.percentageWeight,
      item.responName,
      item.startDate,
      item.endDate,
    ]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  const columns = [
    {
      id: "csvString",
      displayName: "Krs",
    },
    {
      id: "title",
      displayName: "Titulo",
    },
    {
      id: "objective",
      displayName: "Objetivo",
    },
    {
      id: "vertical",
      displayName: "Vertical",
    },
    {
      id: "responName",
      displayName: "Responsable",
    },
    {
      id: "progressOkr",
      displayName: "Progreso Okr",
    },
  ];

  const datas = [
    {
      csvString: csvString,
      title: data.title,
      objective: data.objective,
      vertical: data.vertical,
      responName: data.responName,
      progressOkr: data.progressOkr,
    },
  ];

  return (
    <div id="btn-download" className="btn-download-chart">
      <UncontrolledDropdown>
        <DropdownToggle caret className="button-dropdown">
          Descargar OKR
        </DropdownToggle>
        <DropdownMenu>
          <CsvDownloader
            filename="ReportOkr"
            extension=".csv"
            separator=";"
            wrapColumnChar="'"
            columns={columns}
            datas={datas}          >
            <DropdownItem className="csvButton">Reporte csv</DropdownItem>
          </CsvDownloader>
          <DropdownItem onClick={() => exportComponentAsJPEG(burnDownChart)}>Grafico de quemado</DropdownItem>
          <DropdownItem onClick={() => exportComponentAsJPEG(barChart)}>Grafico de barras</DropdownItem>
          <DropdownItem onClick={() => exportComponentAsJPEG(pieChart)}>Grafico de tortas</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default DownloadChart;
