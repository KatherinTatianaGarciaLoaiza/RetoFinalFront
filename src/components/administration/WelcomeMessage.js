import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';

import Logo from '../../images/Logo.png';

import { auth } from '../logging/Logging';
import { nombre } from '../structure/Avatar';

import '../../styles/style.css';



function WelcomeMessage() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Link to={`/Home`} className="button">
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} style={{ border: '2px solid #F0950E' }}>
          <Modal.Header closeButton style={{ border: '2px solid #F0950E' }}>
            <Modal.Title>
              <div className="centrar">
                <img src={Logo} style={{ width: "80%", height: "30%" }}></img>
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <div className="centrar">
              <Avatar src={auth.currentUser.photoURL} style={{ width: "150px", height: "150px" }} />
            </div>
            <br />
            <h3 className="title3 centrar">!!Te damos la bienvenida {nombre(auth.currentUser.displayName).toUpperCase()},
                        Estamos felices de tenerte con nosotros!!</h3>
            <br />
            <h5 className="title3 centrar"> Esperamos poder aprender mucho de tus aportes. </h5>
            <br />
          </Modal.Body>
          <div className="centrar" >
            <Button variant="contained" style={{ background: "#F0950E", color: "#ffffff" }} >
              Aceptar </Button>
          </div>
          <br />
        </Modal>
      </Link>
    </>
  );
}

export default WelcomeMessage;
