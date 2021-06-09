import React, { useState } from 'react';
import Logo from '../images/Logo.png';
import { auth } from './Logging';
import { nombre } from './Avatar'
import { Link } from 'react-router-dom';
import "../styles/style.css"
import { Modal, Button } from 'react-bootstrap'

function Example() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <img src={Logo} style={{ width: "80%", height: "30%" }}></img>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="title3">!!Te da la bienvenida {nombre(auth.currentUser.displayName)}, 
                    Estamos felices de tenerte de nuevo con notros!!</h3>
                    <br />
                    <h5 className="title3"> Esperamos poder aprender mucho de tus aportes. </h5>
                    <br />
                </Modal.Body>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to={`/Home`} className="button">
                        <Button variant="contained" style={{ background: "#F0950E", color: "#ffffff" }} >
                            Aceptar </Button></Link>
                </div>
                <br />
            </Modal>
        </>
    );
}

export default Example;