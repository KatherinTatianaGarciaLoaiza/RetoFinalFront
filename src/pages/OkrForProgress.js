import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getOwnOKR } from "../actions/okrActions";
import Toolbar from "@material-ui/core/Toolbar";

import NavbarSofKa from "../components/structure/Navbar";
import Sidebar from "../components/structure/Sidebar";
import { estilos } from "../components/structure/DesignNaSi";
import AllOkrCard from "../components/dashboard-folder/AllOkrCard";

const OkrComplete = ({ dispatch, userId, okrs, state }) => {

  let okrsProgress = [];
 

  useEffect(() => {
    dispatch(getOwnOKR(userId));
  }, []);
  const classes = estilos();

  okrsProgress = okrs.filter(function (okr) {
    if (okr.progressOkr < 100) {
      return okr;
    }
  });


  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <Sidebar texto="Mis OKR" ruta="/MyOKRS" />
      {(state = false)}
      <main className={classes.content}>
        <Toolbar />
        <h1>Historial</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {okrsProgress.map((okr) => (
              <div className="col">
            <AllOkrCard key={okr.id} okr={okr} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.okr.OKR.userId,
  okrs: state.okr.OKRUser,
});

export default connect(mapStateToProps)(OkrComplete);
