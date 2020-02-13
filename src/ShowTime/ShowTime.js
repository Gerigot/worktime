import React from "react";
import "./ShowTime.css";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 10px",
    fontSize: "1.5em",
    flexWrap: "wrap"
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  showTimeValue: {
    fontWeight: "bold",
    margin: 5
  }
});
const ShowTime = ({ label, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.label}>{label}:</div>
        <div className={classes.showTimeValue}>{value}</div>
      </div>
    </div>
  );
};

export default ShowTime;
