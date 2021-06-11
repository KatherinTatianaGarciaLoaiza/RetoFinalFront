import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import NavbarSofKa from '../components/structure/Navbar';
import Sidebar from '../components/structure/Sidebar';
import ProfileUser from '../components/administration/ProfileUser';

import { estilos } from '../components/structure/DesignNaSi';

const ProfilePage = () => {
    const classes = estilos();
    return (
        <div className={classes.root}  >
            <NavbarSofKa classes={classes} />
            <Sidebar texto="Mis OKR" ruta="/MyOKRS" />
            <main className={classes.content} style={{background: "#f8ebac", height: "100%"}}>
                <Toolbar />
                <ProfileUser/>
            </main>
        </div>
    )
}

export default ProfilePage