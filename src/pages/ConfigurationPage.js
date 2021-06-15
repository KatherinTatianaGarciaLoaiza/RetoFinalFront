import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';

import NavbarSofKa from '../components/structure/Navbar';
import ConfNotifications from '../components/notifications/ConfNotifications';

import { estilos } from '../components/structure/DesignNaSi';

const ConfigurationPage = () => {
    const classes = estilos();
    return (
        <div className={classes.root}  >
            <NavbarSofKa classes={classes} />
            <main className={classes.content}>
                <Toolbar />
                <ConfNotifications/>
            </main>
        </div>
    )
}

export default ConfigurationPage