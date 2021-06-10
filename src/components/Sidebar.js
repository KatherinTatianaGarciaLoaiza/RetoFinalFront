import React from 'react'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import { estilos } from './DesignNaSi';
import '../styles/style.css';
import Button from "react-bootstrap/Button";
import { Accordion, Card } from 'react-bootstrap'
import { auth } from './Logging';
import { nombre } from './Avatar'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Sidebar({ texto, ruta }) {
  const classes = estilos();
  return (
    <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <Toolbar />
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <Link to={ruta}>
            <div className="btn" style={{ background: "#ffffff" }}>
              <Button variant="outline-light" size="lg">
                {texto}
              </Button>
            </div>
          </Link>
        </List>
        <Toolbar />
        <Divider />
        <List>
          <Accordion defaultActiveKey="0">
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" style={{ background: "#ffffff", color: "#000" }}>
              Dashboard
              <ArrowDropDownIcon />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body><Link to={`/AllOKRS`} className="button" style={{ color: "#000" }}>Todos los OKR</Link></Card.Body>
            </Accordion.Collapse>
            <Divider />
            <Accordion.Collapse eventKey="0">
              <Card.Body><Link to={`/UserOKRS`} className="button" style={{ color: "#000" }} >
                {nombre(auth.currentUser.displayName)}</Link></Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1" style={{ background: "#ffffff", color: "#000" }}>
              Administracion
              <ArrowDropDownIcon />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body><Link to={`/ConfigurationNotifications`} className="button" style={{ color: "#000" }}>Configuracion de notificaciones</Link></Card.Body>
            </Accordion.Collapse>
          </Accordion>
        </List>
      </div>
    </Drawer>
  )
}
