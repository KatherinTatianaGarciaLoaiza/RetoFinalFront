import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export default function NavbarSofKa() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav>
                        <NotificationsNoneIcon/>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
