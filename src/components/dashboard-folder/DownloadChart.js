import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import CsvDownloader from "react-csv-downloader";

const DownloadChart = ({ data }) => {

  let csvString = [];

  csvString = [
    ["Peso Kr ","Responsable Kr ", "Fecha Inicio ", "Fecha Fin"],
    ...data.krs.map((item) => [
      item.percentageWeight,
      item.responName,
      item.startDate,
      item.endDate,
      
    ]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  console.log(data.krs);
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
            datas={datas}
            text="DOWNLOAD"
          /> 
          <DropdownItem>Formato .jpg</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  );
};

export default DownloadChart;
