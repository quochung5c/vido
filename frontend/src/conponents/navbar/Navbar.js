import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import "../../icons/budicon.css";
import logo from "../../img/logo-white.png";

const useStyles = makeStyles(theme => ({
  logo: {
    width: 110
  },
  appBar: {
    position: 'relative'
  }
}));
export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Container >
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
