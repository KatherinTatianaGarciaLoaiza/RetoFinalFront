import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import NavbarSofKa from '../components/structure/Navbar';
import { estilos } from '../components/structure/DesignNaSi';
import KRForm from '../components/planning/KRForm';

const CreateKRPage = () => {
    const classes = estilos();
    return (
        <div className={classes.root}  >
            <NavbarSofKa classes={classes} />
            <main className={classes.content}>
                <Toolbar />
                <KRForm />
            </main>
        </div>
    )
}

export default CreateKRPage