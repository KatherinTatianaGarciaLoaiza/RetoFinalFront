import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom'

export default function NavbarSofKa({ classes }) {
    return (
        <AppBar position="fixed" className={classes.appBar} style={{ background: "#F0950E" }} >
            <div className="col-md">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/Home"> <label className="title">SOKFA OKR</label></Navbar.Brand>
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
                            <ExitToAppIcon style={{ color: 'white' }} fontSize="large" />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </AppBar>
    )
}
