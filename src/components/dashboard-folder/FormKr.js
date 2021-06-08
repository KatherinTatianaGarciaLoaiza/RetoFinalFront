import React, { useState, useEffect } from "react";

const Krs = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(props.lenght + 1);
  }, []);

  return (
    <div className="form-okr content-kr" id="kr-description">
      <h4>Responsable: {props.el.responName}</h4>
      <div className="d-flex justify-content-between">
        <h4>
          {count}. {props.el.keyResult}
        </h4>
        <h4> {props.el.percentageWeight}% </h4>
      </div>
    </div>
  );
};

export default Krs;
