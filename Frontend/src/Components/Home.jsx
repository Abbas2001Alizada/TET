import { Button, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cityImage: {
    width: "100%",
    height: "96vh",
  },
  textOverly: {
    zIndex: "100",
    position: "absolute",
    top: "100px",
    left: "20px",
    textAlign: "center",
  },
  homeText: {
    color: "white",
    fontWeight: "bolder",
  },
  homeBtn: {
    fontSize: "3.5rem",
    borderRadius: "15px",
    marginTop: "16px",
    boxShadow: "3px 3px 3px withe",
    backgroundColor: "green !important",
  },
});

function Home() {
  const classes = useStyles();

  return (
    <>
      <div style={{ position: "relative" }}>
        <img src="" alt="City Image" className={classes.cityImage} />
        <div className={classes.textOverly}>
          <Typography variant="h2" className={classes.homeText}>
            Find YOUR ON THE LBERP WEBSITE
          </Typography>
          <Button variant="contained" className={classes.homeBtn}>
            SEE ALL PROPERTIES
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
