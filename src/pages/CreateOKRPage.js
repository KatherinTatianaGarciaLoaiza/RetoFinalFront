import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import NavbarSofKa from '../components/structure/Navbar';
import OkrFormPage from './OKRFormPage';

import { estilos } from '../components/structure/DesignNaSi';

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
