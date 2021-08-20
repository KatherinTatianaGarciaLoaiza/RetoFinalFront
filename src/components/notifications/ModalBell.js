import React, { useState } from "react";
import axios from 'axios';
import { Modal, Badge, Divider } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import { URI } from '../../actions/okrActions';
import { auth } from '../logging/Logging';

export var newNotifications = false;

export function nuevaNotificacion() {
    newNotifications = (!newNotifications);
}

function iconoDeNotificacion(type) {
    switch (type) {
        case 'OKRFINISHSCREEN':
            return <CheckBoxIcon fontSize="large" />;
        case 'KRFINISHSCREEN':
            return <LibraryAddCheckIcon fontSize="large" />;
        case 'KRLATESCREEN':
            return <WatchLaterIcon fontSize="large" />;
        case 'OKREDITSCREEN':
            return <EditIcon fontSize="large" />;
        case 'OKRDELETESCREEN':
            return <DeleteIcon fontSize="large" />;
        default:
            return;
    }
}

function ModalBell() {

    const [estado, setEstado] = useState([]);
    const [modal, setModal] = useState(false);
    const open_close_Modal = () => {
        setModal(!modal);
    }

    const body = (
        <Container>
            <div align="center">
                <header style={{ background: "#fff", color: "#000" }}>
                    <Row>
                        <Col >
                            <NotificationsIcon style={{ fontSize: 55 }} />
                        </Col>
                        <Col >
                            <h2><strong>Notificaciones</strong></h2>
                        </Col>
                        <Col >
                            <Button style={{ background: "#F0950E", color: "#ffffff"}} onClick={() => open_close_Modal()}>X</Button>
                        </Col>
                    </Row>
                </header>
                <body>
                    {
                        estado.reverse().map(res =>
                            <>
                                {console.log(res)}
                                <br />
                                < Row className="justify-content-md-center">
                                    <Col xs="11">
                                        <Card style={{background:"#cacbce"}}>
                                            <Card.Body>
                                                <Card.Title style={{background:"#cacbce", color: "#fff" }}>
                                                    <Row>
                                                        <Col md="1">{iconoDeNotificacion(res.type)}</Col>
                                                        <Col md="auto">{res.message}</Col>
                                                    </Row>
                                                </Card.Title>
                                                <div align="center">
                                                    <Button className="body" style={{ background: "#F0950E", color: "#ffffff", justifyContent: "end" }}
                                                        onClick={() => {
                                                            axios.delete(`${URI}/deleteNotification/${res.id}`);
                                                            open_close_Modal();
                                                        }}>Eliminar Notificacion</Button>
                                                </div>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Divider />
                                </Row>
                            </>
                        )
                    }
                    <br />
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
            {
                newNotifications ? <>
                    <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
                        <NotificationsIcon style={{ color: 'white', cursor: "pointer", fontSize: 55 }} onClick={() => {
                            Respuesta()
                            open_close_Modal()
                            nuevaNotificacion()
                        }
                        } />
                    </Badge>
                </> :
                    <NotificationsIcon style={{ color: 'white', cursor: "pointer", fontSize: 55 }} onClick={() => {
                        Respuesta()
                        open_close_Modal()
                    }
                    } />
            }

            {modal && <Modal open={modal} onClose={open_close_Modal} style={{ overflow: 'scroll' }}>{body}</Modal>}
        </div>
    )
}

export default ModalBell;
