import React, { useEffect } from 'react';
import NavbarSofKa from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Toolbar from '@material-ui/core/Toolbar';
import { estilos } from '../components/DesignNaSi';
import KrCard from '../components/Card';
import { connect } from 'react-redux';
import { getOwnOKR } from '../actions/okrActions';
import OkrCard from '../components/OkrCard';

const MyOKRSPage = ({ dispatch, userId, okrs }) => {
  useEffect(() => {
    dispatch(getOwnOKR(userId));
  }, [dispatch, userId]);

  const classes = estilos();
  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <Sidebar texto='Crear OKR' ruta='/CreateOKR' />
      <main className={classes.content}>
        <Toolbar />
        {/* {okrs.map((okr) => (
          <div key={okr.id}>
            <h2 key={okr.id}>{okr.title}+botones</h2>
            {okr.krs.map((kr) => (
              <KrCard keyResult={kr.keyResult} description={kr.description} />
            ))}
          </div>
        ))} */}
        {okrs.map((okr) => (
          <OkrCard key={okr.id} okr={okr} />
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
