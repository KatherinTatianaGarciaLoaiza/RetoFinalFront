import React, { useEffect, useState } from 'react';
import NavbarSofKa from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Toolbar from "@material-ui/core/Toolbar";
import ProgressOkr from "../components/dashboard-folder/ProgressOkr";
import { estilos } from "../components/DesignNaSi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/dashboardStyles.css";
import Dropdown from "../components/dashboard-folder/Dropdown";
import Dashboard from "../components/dashboard-folder/FormOkr";
import LineChart from "../components/dashboard-folder/LineChart";
import BarChart from "../components/dashboard-folder/BarChart";
import { Button } from "@material-ui/core";
import PieChart from "../components/dashboard-folder/PieChart";
import DownloadChart from "../components/dashboard-folder/DownloadChart";
import { getOwnOKR, getOkrById, getMaxProgressOkr } from '../actions/okrActions';
import { connect } from 'react-redux';
import { CheckBoxOutlineBlankRounded } from '@material-ui/icons';
import { SelectionState } from '@devexpress/dx-react-chart';


const UserOKRSPage = ({okrs, dispatch, id, title, progress, userId, progressOkr}) => {

  const [redirect, setRedirect] = useState(false);

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
            <nav>
              <Button variant="contained">Default</Button>
              <Button variant="contained">Default</Button>
            </nav>
          </div>
          <div className="col -md-6">
            <Dropdown title={title} id={id}/>
          </div>
        </div>
        <div id="center-senction" className="row">
          <div className="col-lg-1" id="progress-okr">
            <ProgressOkr progress={progress} />
          </div>
          <div className="col-lg-7">
            <LineChart />
          </div>
          <div className="col-lg-4">
            <Dashboard />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <BarChart />
          </div>
          <div className="col-lg-4" id="pie-chart">
            <PieChart />
          </div>
          <div className="col-lg-3">
            <DownloadChart />
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
title: state.okr.ProgressOKR.title,
progress: state.okr.ProgressOKR.progressOkr,
id : state.okr.ProgressOKR.id
});

export default connect(mapStateToProps)(UserOKRSPage);
