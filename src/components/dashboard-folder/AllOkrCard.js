import React from "react";
import "../../styles/OkrCard.css";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import "../../styles/Card.css";

const useStyles = makeStyles({
  root: {
    border: "1px solid #E5DFDA",
    background: "#F9F9F5",
    maxWidth: 300,
    minWidth: 300,
    margin: "25px",
  },
  media: {
    height: 140,
  },
});

const AllOkrCard = ({ okr}) => {
  const classes = useStyles();

  return (
    <div>
      <div className="container_display_title"></div>
      <div className="container_cards">
        <Card className={classes.root}>
          <CardActionArea>
            <div className="card-title">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  align="center"
                  component="h4"
                >
                  {okr.title}
                </Typography>
              </CardContent>
            </div>
            <CardMedia className="progressbar">
              <Box bottom={10} position="relative" display="inline-flex">
                <CircularProgress
                  variant="determinate"
                  color="inherit"
                  value={okr.progressOkr}
                  size={90}
                />
                <Box
                  top={0}
                  left={0}
                  bottom={0}
                  right={0}
                  position="absolute"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="textPrimary"
                  >{`${okr.progressOkr}%`}</Typography>
                </Box>
              </Box>
            </CardMedia>
          </CardActionArea>
        </Card>
      </div>
      <hr />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redirect: state.okr.redirect,
  userId: state.okr.OKR.userId,
});

export default connect(mapStateToProps)(AllOkrCard);
