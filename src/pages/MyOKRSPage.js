import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';

import NavbarSofKa from '../components/structure/Navbar';
import Sidebar from '../components/structure/Sidebar';
import { cleanRedirect, getOwnOKR } from '../actions/okrActions';

import { estilos } from '../components/structure/DesignNaSi';
import '../styles/OkrFormCss.css';
import OKRCard from '../components/planning/OKRCard';

const MyOKRSPage = ({ dispatch, userId, okrs }) => {

  useEffect(() => {
    dispatch(getOwnOKR(userId));
  }, [dispatch, userId]);

  const classes = estilos();

  return okrs.length === 0 ? (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <Sidebar texto='Crear OKR' ruta='/CreateOKR' />
      <main className={classes.content}>
        <Toolbar />
        <div className='invitacionOkr'>
          <h1>No se encuentran OKR</h1>
          <p>Para empezar por favor crea una OKR</p>
        </div>
      </main>
    </div>
  ) : (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <Sidebar texto='Crear OKR' ruta='/CreateOKR' />
      <main className={classes.content}>
        <Toolbar />
        {okrs.map((okr) => (
          <OKRCard key={okr.id} okr={okr} />
        ))}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.okr.OKR.userId,
  okrs: state.okr.OKRUser,
});

export default connect(mapStateToProps)(MyOKRSPage);
