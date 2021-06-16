import React, { useState } from "react";
import axios from 'axios';
import { Modal } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import { URI } from '../../actions/okrActions';
import { auth } from '../logging/Logging';

function ModalBell() {

    const [estado, setEstado] = useState([]);
    const [modal, setModal] = useState(false);
    const open_close_Modal = () => {
        setModal(!modal);
    }

    const body = (
        <Container>
            <div align="center">
                <header>
                    <strong>Notificaciones</strong>
                    <button onClick={() => open_close_Modal()}>X</button>
                </header>
                <body>
                    {estado.map(res =>
                        <>
                            <br />
                            < Row className="justify-content-md-center">
                                <Col xs="11">
                                    <Card className="text-center">
                                        <Card.Body>
                                            <Card.Title>{res.message}</Card.Title>
                                            <Button variant="primary">Eliminar Notificacion</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    )}
                </body>
            </div>
        </Container >
    );

    function Respuesta() {
        return axios.get(`${URI}/GetNotifications/${auth.currentUser.email}`)
            .then((value) => setEstado(value.data));
    }

    return (
        <div className="App" id="App">
            <NotificationsIcon style={{ color: 'white', cursor: "pointer" }} fontSize="large" onClick={() => {
                Respuesta()
                open_close_Modal()
            }
            } />
            {modal && <Modal open={modal} onClose={open_close_Modal} style={{ overflow: 'scroll' }}>{body}</Modal>}
        </div>
    )
}

export default ModalBell;
