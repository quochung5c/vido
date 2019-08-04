import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "../../icons/budicon.css";
import logo from "../../img/logo-white.png";

const useStyles = makeStyles(theme => ({
  icon: {
    marginLeft: theme.spacing(1)
  },
  categoryButton: {  
    fontSize: 20
  },
  logo: {
    width: 80
  }
}));
export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Button color="inherit" className={classes.categoryButton}>
          <i class="budicon-list-1" />
        </Button>
        <img src={logo} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
}
