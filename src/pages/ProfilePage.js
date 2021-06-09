import React from 'react'
import NavbarSofKa from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Toolbar from '@material-ui/core/Toolbar';
import { estilos } from '../components/DesignNaSi';
import ProfileUser from '../components/ProfileUser';

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