import React from 'react';
import NavbarSofKa from '../components/Navbar';
import Toolbar from '@material-ui/core/Toolbar';
import { estilos } from '../components/DesignNaSi';
import OkrFormPage from './OKRFormPage';

const CreateOKRPage = () => {
  const classes = estilos();
  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <main className={classes.content}>
        <Toolbar />
        <OkrFormPage />
      </main>
    </div>
  );
};

export default CreateOKRPage;
