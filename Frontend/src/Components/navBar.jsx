import React, { useEffect, useState } from "react";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  leftNav: {
    marginRight: "auto",
  },
  rightNav: {
    marginLeft: "auto",
    marginLeft: "10rem",
  },

  addProperty: {
    backgroundColor: "green",
    color: "white",
    width: "10rem",
    padding: "8px",
    borderRadius: "15px",
  },
  loginBtn: {
    marginLeft: "auto",
    backgroundColor: "white",
    color: "black",
    width: "10rem",
    padding: "8px",
    borderRadius: "15px",
    outline: "none",
  },
});

export const NavbarBar = () => {
  const [btnColor, setBtnColor] = useState("error");
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.leftNav}>
            <Button color="inherit">
              <Typography variant="h4">Home</Typography>
            </Button>
          </div>
          <div>
            <Button color="inherit">
              <Typography variant="h6">About</Typography>
            </Button>
            <Button color="inherit">
              <Typography variant="h6">Sercies</Typography>
            </Button>
          </div>
          <div className={classes.rightNav}>
            <Button color="inherit">
              <Typography className={classes.addProperty}>
                Add addProperty
              </Typography>
            </Button>

            <Button color="inherit">
              <Typography className={classes.loginBtn}>Login</Typography>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
