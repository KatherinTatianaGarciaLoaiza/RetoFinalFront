import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from "@material-ui/core";
import NavbarSofKa from '../components/structure/Navbar';
import Sidebar from '../components/structure/Sidebar';
import Dropdown from "../components/dashboard-folder/Dropdown";
import Dashboard from "../components/dashboard-folder/FormOkr";
import LineChart from "../components/dashboard-folder/LineChart";
import BarChart from "../components/dashboard-folder/BarChart";
import PieChart from "../components/dashboard-folder/PieChart";
import DownloadChart from "../components/dashboard-folder/DownloadChart";
import ProgressOkr from "../components/dashboard-folder/ProgressOkr";
import { getDataChart } from "../actions/okrActions";
import "../styles/dashboardStyles.css";
import { estilos } from '../components/structure/DesignNaSi';
import { Link } from 'react-router-dom';

const UserOKRSPage = ({ krs, id, title, progress, objective, data, dispatch, progressData }) => {

  useEffect(() => {
    dispatch(getDataChart(id));
  }, []);

  let useRefLineChart = useRef();
  let useRefBarChart = useRef();
  let useRefPieChart = useRef();
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
              <Link to={`/ProgressOkr`} className="button" krs ={krs} ><Button variant="outlined"> Progreso </Button></Link>
              <Link to={`/Complete`} className="button" krs ={krs} ><Button variant="outlined"> Completos </Button></Link>
            </nav>
          </div>
          <div className="col -md-6">
            <Dropdown title={title} id={id} />
          </div>
        </div>
        <div id="center-senction" className="row">
          <div className="col-lg-1" id="progress-okr">
            <ProgressOkr progress={progress} />
          </div>
          <div className="col-lg-7" ref={useRefLineChart}>
            <LineChart krs={krs} progressData={progressData} />
          </div>          
          <div className="col-lg-4">
            <Dashboard  {...{ krs, id, title, progress, objective }} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4" ref={useRefBarChart}>
            <BarChart krs={krs} okrId={id} progressData={progressData} />
          </div>
          <div className="col-lg-4" id="pie-chart" ref={useRefPieChart}>
            <PieChart krs={krs} />
          </div>
          <div className="col-lg-3">
            <DownloadChart data={data} burnDownChart={useRefLineChart} barChart={useRefBarChart} pieChart={useRefPieChart} />
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  title: state.okr.ProgressOKR.title,
  progress: state.okr.ProgressOKR.progressOkr,
  id: state.okr.ProgressOKR.id,
  objective: state.okr.ProgressOKR.objective,
  krs: state.okr.ProgressOKR.krs,
  data: state.okr.ProgressOKR,
  progressData: state.okr.DataProgressChart,
});

export default connect(mapStateToProps)(UserOKRSPage);
