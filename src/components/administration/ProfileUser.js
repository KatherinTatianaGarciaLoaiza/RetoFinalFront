import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import { auth } from '../logging/Logging';



export default function ProfileUser() {
    const { displayName, photoURL, email } = auth.currentUser || { uid: "", displayName: "", photoURL: "", email: "" }
    return (
        <Container style={{ background: "#FFFFFF" , height: "100%"}}>
            <Row className="justify-content-md-center" >
                <h3>Perfil</h3>
            </Row>
            <br />
            <Row className="justify-content-md-center" >
                <Avatar src={photoURL} style={{ width: "150px", height: "150px" }} />
            </Row>
            <br />
            <Row className="justify-content-md-center" >
                <h4>{displayName}</h4>
            </Row>
            <br />
            <Row className="justify-content-md-center" >
                <h4>{email}</h4>
            </Row>
            <br />
            <Row className="justify-content-md-center" >
                <Link to={`/Home`} className="button" >
                    <Button variant="contained" style={{ background: "#F0950E", color: "#ffffff" }}>
                        Volver
                    </Button>
                </Link>
            </Row>
            <br />
        </Container>
    )
}
