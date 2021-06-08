import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { SignOut } from './Logging';
import { auth } from './Logging';
import AvatarUser from './Avatar';

export default function NavbarSofKa({ classes }) {
    const { displayName, photoURL, email } = auth.currentUser || { uid: "", displayName: "", photoURL: "", email: "" }
    return (
        <AppBar position="fixed" className={classes.appBar} style={{ background: "#F0950E" }} >
            <div className="col-md">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand ><Link to="/Home"><label className="title">SOKFA OKR</label></Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            {console.log(displayName)}
                            <NotificationsIcon style={{ color: 'white' }} fontSize="large" />
                            <AvatarUser displayName={displayName} photoURL={photoURL} />
                            <SignOut />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </AppBar>
    )
}
