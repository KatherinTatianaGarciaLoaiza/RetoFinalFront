import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import NavbarSofKa from '../components/structure/Navbar';
import { estilos } from '../components/structure/DesignNaSi';
import OKRForm from '../components/planning/OKRForm';

const CreateOKRPage = () => {
  const classes = estilos();
  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <main className={classes.content}>
        <Toolbar />
        <OKRForm />
      </main>
    </div>
  );
};

export default CreateOKRPage;
