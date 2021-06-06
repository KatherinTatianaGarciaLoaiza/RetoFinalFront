import React from 'react'
import NavbarSofKa from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Toolbar from '@material-ui/core/Toolbar';
import { estilos } from '../components/DesignNaSi';

const MyOKRSPage = () => {
    const classes = estilos();
    return (
        <div className={classes.root}  >
            <NavbarSofKa classes={classes} />
            <Sidebar texto="Crear OKR" ruta="/CreateOKR" />
            <main className={classes.content}>
                <Toolbar />
                {
                    <h1>Aca trabajan ustedes</h1>
                }
            </main>
        </div>
    )
}

export default MyOKRSPage