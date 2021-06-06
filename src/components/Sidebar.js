import React from 'react'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import { estilos } from './DesignNaSi';

export default function Sidebar({ texto, ruta }) {
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
          <Link className="button" to={ruta}>{texto}</Link>
        </List>
        <Divider />
        <List>
          <p>Dashboard</p>
          <ListItem> <Link to={`/AllOKRS`} className="button">Todos los OKR</Link> </ListItem>
          <ListItem> <Link to={`/UserOKRS`} className="button">Pepito Perez y vertical</Link> </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem> <Link to={`/ConfigurationNotifications`} className="button">Configuracion de notificaciones</Link> </ListItem>
        </List>
      </div>
    </Drawer>
  )
}
