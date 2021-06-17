import React, { useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";

import NavbarSofKa from "../components/structure/Navbar";
import Sidebar from "../components/structure/Sidebar";

import { estilos } from "../components/structure/DesignNaSi";
import {  getOwnOKR, getOwnOKRHomePage } from "../actions/okrActions";
import { connect } from "react-redux";
import AllOkrCard from "../components/dashboard-folder/AllOkrCard";

const HomePage = ({ state, dispatch, userId, okrs }) => {
  useEffect(() => {
    dispatch(getOwnOKRHomePage(userId));
  }, [dispatch, userId]);

  console.log(okrs);

  const classes = estilos();
  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <Sidebar texto="Mis OKR" ruta="/MyOKRS" />
      {(state = false)}
      <main className={classes.content}>
        <Toolbar />
        <h1>Mis OKR</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {okrs.map((okr) => (
            <div className="col" key={okr.id}>
              <AllOkrCard okr={okr} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.okr.OKR.userId,
  okrs: state.okr.MyOkrs,
});

export default connect(mapStateToProps)(HomePage);
