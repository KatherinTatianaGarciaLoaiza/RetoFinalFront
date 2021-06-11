import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';

import NavbarSofKa from '../components/structure/Navbar';
import Sidebar from '../components/structure/Sidebar';

import { estilos } from '../components/structure/DesignNaSi';

const HomePage = (state) => {
    const classes = estilos();    
    return (
        <div className={classes.root}  >
            <NavbarSofKa classes={classes} />
            <Sidebar texto="Mis OKR" ruta="/MyOKRS" />
            {state = false}
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