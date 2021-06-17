import React from "react";
import { v4 as uuidv4 } from "uuid";
import Scroll from "react-scroll";
import Krs from "./FormKr";

let Element = Scroll.Element;
const Dashboard = (props) => {
  return (
    <div className="context-data" id="description-okr">
      <div className="title-context">
        <h4>{props.title}</h4>
      </div>
      <hr className="hr-title" />
      <h4 className="content-kr">
        Objetivo: <br /> {props.objective}
      </h4>
      <hr />
      <h4 className="content-kr">Resultados Clave </h4>
      <Element
        style={{
          position: "relative",
          height: "180px",
          overflowY: "scroll",
        }}
      >
        <Element name="firstInsideContainer">
          {props.krs.map((el, index) => (
            <Krs key={uuidv4()} el={el} lenght={index} />
          ))}
        </Element>
      </Element>
    </div>
  );
};

export default Dashboard;
