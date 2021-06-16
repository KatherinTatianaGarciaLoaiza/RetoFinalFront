import React, { useState } from "react";
import axios from 'axios';
import { Modal } from '@material-ui/core';
import { Card, Button } from 'react-bootstrap';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { URI } from '../../actions/okrActions';
import { auth } from '../logging/Logging';

function ModalBell() {

    const [estado, setEstado] = useState([]);
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
            .then((value) => setEstado(value.data));
    }

    function notificationsInCard() {
        console.log("perro")/* 
        return estado.map(() => { */
            {<Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>}
    /*     })
        console.log(estado[1]) */
    }

    return (
        <div className="App" id="App">
            <NotificationsIcon style={{ color: 'white', cursor: "pointer" }} fontSize="large" onClick={() => {
                Respuesta()
                open_close_Modal()
                notificationsInCard()
            }} />
           {/*  <Modal open={modal} onClose={open_close_Modal}  {...notificationsInCard()} > */}
            <Modal open={modal} onClose={open_close_Modal} >
                {body}
                
            </Modal>
        </div>
    )
}

export default ModalBell;
