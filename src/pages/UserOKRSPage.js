import React from "react";
import NavbarSofKa from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Toolbar from "@material-ui/core/Toolbar";
import ProgressOkr from "../components/dashboard-folder/ProgressOkr";
import { estilos } from "../components/DesignNaSi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/dashboardStyles.css";
import Dropdown from "../components/dashboard-folder/Dropdown";
import Dashboard from "../components/dashboard-folder/FormOkr";

const UserOKRSPage = () => {
  const classes = estilos();
  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <Sidebar texto="Mis OKR" ruta="/MyOKRS" />
      <main className={classes.content}>
        <Toolbar />
        <div className="row">
          <div className="col -md-6">
            <h1>Dashboard</h1>
          </div>
          <div className="col -md-6">            
              <Dropdown/>            
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2" id="progress-okr">
            <ProgressOkr />
          </div>
          <div className="col-lg-6">
          </div>
          <div className="col-lg-2">
            <Dashboard />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h1>Dashboard</h1>
          </div>
          <div className="col-lg-2">
            <button style={{ alignItems: "flex-end" }}>
              <h1>david</h1>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserOKRSPage;
