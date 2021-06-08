import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppBar from '@material-ui/core/AppBar';
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import '../styles/style.css'
=======
import {Link} from 'react-router-dom';
import {SignOut} from '../App';
>>>>>>> 0627b4e55c7074a2cda3edb68d4b1bcdc7316f24

export default function NavbarSofKa({ classes }) {
    return (
        <AppBar position="fixed" className={classes.appBar} style={{ background: "#F0950E" }} >
            <div className="col-md">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand ><Link to="/Home"><label className="title">SOKFA OKR</label></Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        
                            {/* <Link to="/AllOKRS">Todos los OKRS</Link>
                        <Link to="/CreateOKR">CrearOKR</Link>
                        <Link to="/UserOKRS">OKRS del usuario</Link>
                        <Link to="/ProfileUser">Perfil del usuario</Link>
                        <Link to="/ConfigurationNotifications">Estas son las configuraciones</Link> */}
                        </Nav>
                        <Nav>
                            <NotificationsIcon style={{ color: 'white' }} fontSize="large" />
                            <NotificationsIcon style={{ color: 'white' }} fontSize="large" />
                            <SignOut/>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </AppBar>
    )
}
