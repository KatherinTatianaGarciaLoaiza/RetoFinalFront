import React from 'react'
import NavbarSofKa from '../components/Navbar';
import Toolbar from '@material-ui/core/Toolbar';
import { estilos } from '../components/DesignNaSi';
import KRPage from './KRFormPage'

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