import React, { useState } from "react";
import axios from 'axios';
import { Modal } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { URI } from '../../actions/okrActions';
import { auth } from '../logging/Logging';


export function NotificationsHistory(){
    return axios.get(`${URI}/GetNotifications/${auth.currentUser.email}`).then(res => console.log(res.data)) 
  }
  
function ModalBell() {
    const [state, setState] = useState();

    const [estado, setEstado] = useState("message");
    const [modal, setModal] = useState(false);
    const open_close_Modal = () => {
        setModal(!modal);
    }

    const body = (
        <div className="Modal" id="Modal">
            <div align="center">
                <header>
                    <strong>Notificaciones</strong>
                    <button onClick={() => open_close_Modal()}>X</button>
                </header>   
            </div>
        </div>
    );

    function Respuesta() {
        return axios.get(`${URI}/GetNotifications/${auth.currentUser.email}`)
        .then((value) => setEstado(value.data) );
    }

    return (
        <div className="App" id="App">
            <NotificationsIcon style={{ color: 'white', cursor: "pointer" }} fontSize="large" onClick={() => {
                Respuesta()
                console.log("estado "+ estado[1].message)
                open_close_Modal()
            }
            } />
            <Modal open={modal} onClose={open_close_Modal}>
                {body}
            </Modal>
        </div>
    )
}

export default ModalBell;
