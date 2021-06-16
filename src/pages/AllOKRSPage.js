import React, { useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import NavbarSofKa from "../components/structure/Navbar";
import Sidebar from "../components/structure/Sidebar";
import AllOkrCard from "../components/dashboard-folder/AllOkrCard";
import { getAllOkr } from "../actions/okrActions";
import { connect } from "react-redux";
import { estilos } from "../components/structure/DesignNaSi";

const AllOKRSPage = ({ dispatch, allOkrs }) => {
  useEffect(() => {
    dispatch(getAllOkr());
  }, []);

  const classes = estilos();
  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <Sidebar texto="Mis OKR" ruta="/MyOKRS" />
      <main className={classes.content}>
        <Toolbar />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {allOkrs.map((okr) => (
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
  allOkrs: state.okr.AllOkrs,
});

export default connect(mapStateToProps)(AllOKRSPage);
