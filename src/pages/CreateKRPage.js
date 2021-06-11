import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';

import NavbarSofKa from '../components/structure/Navbar';
import KRPage from './KRFormPage';

import { estilos } from '../components/structure/DesignNaSi';

const CreateKRPage = () => {
    const classes = estilos();
    return (
        <div className={classes.root}  >
            <NavbarSofKa classes={classes} />
            <main className={classes.content}>
                <Toolbar />
                <KRPage />
            </main>
        </div>
    )
}

export default CreateKRPage