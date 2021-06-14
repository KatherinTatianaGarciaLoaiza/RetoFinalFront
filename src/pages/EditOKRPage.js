import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import NavbarSofKa from '../components/structure/Navbar';
import { estilos } from '../components/structure/DesignNaSi';
import OKREditForm from '../components/planning/OKREditForm'

const EditOKRPage = () => {
  const classes = estilos();
  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <main className={classes.content}>
        <Toolbar />
        <OKREditForm />
      </main>
    </div>
  );
}

export default EditOKRPage;
