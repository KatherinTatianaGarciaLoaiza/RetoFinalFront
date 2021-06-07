import React from 'react';
import NavbarSofKa from '../components/Navbar';
import Toolbar from '@material-ui/core/Toolbar';
import { estilos } from '../components/DesignNaSi';
import KRFormPage from './KRFormPage';

export const CreateKRPage = () => {
  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <main className={classes.content}>
        <Toolbar />
        <KRFormPage />
      </main>
    </div>
  );
};
