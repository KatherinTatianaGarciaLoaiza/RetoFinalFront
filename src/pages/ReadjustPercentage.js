import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import NavbarSofKa from '../components/structure/Navbar';
import { estilos } from '../components/structure/DesignNaSi';
import FormUpdateWeigthKRS from '../components/planning/FormUpdateWeigthKRS';


const ReadjustPercentage = () => {
  const classes = estilos();
  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <main className={classes.content}>
        <Toolbar />
        <FormUpdateWeigthKRS />
      </main>
    </div>
  );
};



export default ReadjustPercentage;

