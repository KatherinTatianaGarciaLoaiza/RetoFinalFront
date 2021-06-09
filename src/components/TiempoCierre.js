import React, {useState} from 'react';
import { SignOut } from "./Logging";

export default function Tiempo(){
    const [Tiempo,setTiempo] = useState(5000);
        setInterval(() => {
        //return console.log("cerrar")
        //return <SignOut/>
        }, Tiempo);
}