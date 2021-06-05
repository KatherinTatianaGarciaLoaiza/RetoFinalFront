import React from 'react'
import ClippedDrawer from "../components/DesignNaSi";
import NavbarSofKa from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Toolbar from '@material-ui/core/Toolbar';
import { estilos } from '../components/DesignNaSi';

const HomePage = () => {
    const classes = estilos();
    return (
        <div className={classes.root}  >
            <NavbarSofKa classes={classes} />
            <Sidebar texto="Mis OKR" ruta="" />
            <main className={classes.content}>
                <Toolbar />
                {
                    <h1>Aca trabajan ustedes</h1>
                }
            </main>
        </div>
    )
}

export default HomePage