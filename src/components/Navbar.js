import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Link } from 'react-router-dom'

export default function NavbarSofKa() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/Home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav>
                        <NotificationsIcon style={{ color: 'white' }} fontSize = "large"/>
                        <Link to="/AllOKRS">Todos los OKRS</Link>
                        <Link to="/MyOKRS">Mis OKRS</Link>
                        <Link to="/UserOKRS">OKRS del usuario</Link>
                        <Link to="/ProfileUser">Perfil del usuario</Link>
                        <Link to="/ConfigurationNotifications">Estas son las configuraciones</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
