import React from 'react'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import { estilos } from './DesignNaSi';
import '../styles/style.css';
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap"
import { auth } from './Logging';
import { nombre } from './Avatar'
import { getMaxProgressOkr } from '../actions/okrActions';
import { connect } from 'react-redux';

function Sidebar({dispatch, userId, texto, ruta}) {

  const progressOkrMax = (userId) =>{
    dispatch(getMaxProgressOkr(userId))
  }


  const classes = estilos();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
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
        <Divider />
        <List>
          <Dropdown>
            <Dropdown.Toggle style={{ background: "#ffffff", color: "#000" }}>
              Dashboard
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item ><Link to={`/AllOKRS`} className="button" style={{ color: "#000" }}>Todos los OKR</Link></Dropdown.Item>
              <Dropdown.Item ><Link to={`/UserOKRS`} className="button" style={{ color: "#000" }}  onClick={progressOkrMax(userId)}>
              
                {nombre(auth.currentUser.displayName)}</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </List>
        <Divider />
        <List>
          <Dropdown>
            <Dropdown.Toggle style={{ background: "#ffffff", color: "#000" }}>
              Adiministracion
          </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item ><Link to={`/ConfigurationNotifications`} className="button" style={{ color: "#000" }}>Configuracion de notificaciones</Link></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </List>
      </div>
    </Drawer>
  )
}

const mapStateToProps = (state) => ({
  userId: state.okr.OKR.userId,
});


export default connect(mapStateToProps)(Sidebar);
