import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import NavbarSofKa from '../components/structure/Navbar';
import { estilos } from '../components/structure/DesignNaSi';
import KREditForm from '../components/planning/KREditForm';

const EditKRPage = () => {
    const classes = estilos();
    return (
        <div className={classes.root}>
            <NavbarSofKa classes={classes} />
            <main className={classes.content}>
                <Toolbar />
                <KREditForm />
            </main>
        </div>
    );
}

export default EditKRPage;
