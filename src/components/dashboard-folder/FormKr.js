import React, { useState, useEffect } from 'react';

const Krs = (props) => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        setCount(props.lenght + 1);
    }, []);



    return (
        <div className = "form-okr">
                <h4>Responsable: {props.el.responName}</h4>
                <h4>{count}. {props.el.keyResult} {props.el.percentageWeight}% </h4>
        </div>
    );
}

export default Krs;