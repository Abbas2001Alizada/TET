import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
  },
  my_btn: {
    backgroundColor: "yellow",
  },
});

function Login() {
  const [btnColor, setBtnColor] = useState("error");
  const classes = useStyles();

  function handelChangeColor() {
    setBtnColor("success");
  }
  return (
    <div className={classes.root}>
      <Typography variant="h4">
        this is First line of code for this lesson
      </Typography>
      <h1>This is Login page</h1>
      <Button
        className={classes.my_btn}
        onClick={handelChangeColor}
        color={btnColor}
        variant="contained"
        size="large"
      >
        Submit
      </Button>
    </div>
  );
}

export default Login;