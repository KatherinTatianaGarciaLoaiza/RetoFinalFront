import React, { useState } from 'react';
import Logo from '../images/Logo.png';
import { auth } from './Logging';
import { nombre } from './Avatar';
import { Link } from 'react-router-dom';
import '../styles/style.css';
import { Modal, Button } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';

function WelcomeMessage() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        style={{ border: '2px solid #F0950E' }}>
        <Modal.Header closeButton style={{ border: '2px solid #F0950E' }}>
          <Modal.Title>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={Logo} alt='' style={{ width: '80%', height: '30%' }}></img>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src={auth.currentUser.photoURL}
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <br />
          <h3 className='title3'>
            !!Te damos la bienvenida{' '}
            {nombre(auth.currentUser.displayName).toUpperCase()}, Estamos
            felices de tenerte con nosotros!!
          </h3>
          <br />
          <h5 className='title3'>
            {' '}
            Esperamos poder aprender mucho de tus aportes.{' '}
          </h5>
          <br />
        </Modal.Body>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={`/Home`} className='button'>
            <Button
              variant='contained'
              style={{ background: '#F0950E', color: '#ffffff' }}>
              Aceptar{' '}
            </Button>
          </Link>
        </div>
        <br />
      </Modal>
    </>
  );
}

export default WelcomeMessage;
