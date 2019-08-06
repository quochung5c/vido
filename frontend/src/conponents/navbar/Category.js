import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  flexItem: {
    flexGrow: 1,
    position: "relative"
  },
  categoryText: {
    marginLeft: 6
  },
  categoryButton: {
    padding: 10
  },
  dropdown: {
    position: "absolute",
    marginTop: 6,
    minWidth: 120,
    display: "flex",
    flexDirection: "column"
  },
  categoryItem: {
    padding: 10,
    textTransform: "none",
    justifyContent: 'flex-start'
  }
}));
export default function Category() {
  const [open, setOpen] = useState(false);
  const handleClickAway = () => {
    setOpen(false);
    console.log(open);
  };
  const handleClick = () => {
    setOpen(prev => !prev);
    console.log(open);
  };
  const classes = useStyles();
  return (
    <Paper>
      <Container className={classes.root}>
        <div className={classes.flexItem}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <Button className={classes.categoryButton} onClick={handleClick}>
              <i class="budicon-list-1" />
              <Typography variant="p" className={classes.categoryText}>
                Danh mục
              </Typography>
            </Button>
          </ClickAwayListener>
          {open ? (
            <Paper className={classes.dropdown}>
              <Button className={classes.categoryItem}>Đồ phượt</Button>
              <Button className={classes.categoryItem}>Trang phục</Button>
            </Paper>
          ) : null}
        </div>
        <Button className={classes.categoryButton}>
          <i class="budicon-newspaper" />
          <Typography variant="p" className={classes.categoryText}>
            Tin tức
          </Typography>
        </Button>
        <Button className={classes.categoryButton}>
          <i class="budicon-mail-1" />
          <Typography variant="p" className={classes.categoryText}>
            Liên hệ
          </Typography>
        </Button>
      </Container>
    </Paper>
  );
}
