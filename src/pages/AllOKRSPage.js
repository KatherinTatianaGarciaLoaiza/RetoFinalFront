import React, { useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import NavbarSofKa from "../components/structure/Navbar";
import Sidebar from "../components/structure/Sidebar";
import AllOkrCard from "../components/dashboard-folder/AllOkrCard";
import { getAllOkr, getOwnOKR } from "../actions/okrActions";
import { connect } from "react-redux";
import { estilos } from "../components/structure/DesignNaSi";
import { CardBody } from "reactstrap";

const AllOKRSPage = ({ dispatch, allOkrs }) => {
  useEffect(() => {
    dispatch(getAllOkr());
  }, []);

  let userIds = [];
  let card = [];

  const mapId = () => {
    allOkrs.forEach((element) => {
      if (!userIds.includes(element.userId)) {
        userIds.push(element.userId);
      }
    });
  };

  const cards = () => {
    for (let i = 0; i < userIds.length; i++) {
      card[i] = allOkrs.filter((el) => el.userId === userIds[i]);
    }
  };

  mapId();
  cards();

  const classes = estilos();
  return (
    <div className={classes.root}>
      <NavbarSofKa classes={classes} />
      <Sidebar texto="Mis OKR" ruta="/MyOKRS" />
      <main className={classes.content}>
        <Toolbar />
        <div>
          {card.map((okr) => (
            <div key={okr[0].id}>
              <h1> Vertical {okr[0].vertical} - {okr[0].responName} </h1>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <br />
                {okr.map((el) => (
                  <div className="col" key={el.id}>
                    <AllOkrCard  okr={el} />
                  </div>
                ))}
              </div>
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
