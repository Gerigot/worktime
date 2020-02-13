import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "1px dotted darkcyan",
    margin: 10
  },
  label: {
    fontWeight: "bold",
    flexBasis: 150,
    marginRight: 20
  },
  time: {
    border: "1px solid #2196F3",
    borderRadius: 10,
    padding: 5,
    fontSize: 'inherit',
    textAlign: "center",
    margin: 5,
    outline: "none"
  }
});
function TimeInsert({ value, onChange, label }) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div className={classes.label}>{label}</div>
        <input
          className={classes.time}
          value={value}
          onChange={verifyValue(onChange)}
        />
      </div>
    </div>
  );
}

const verifyValue = onChange => event => {
  let value = event.target.value;

  if (value.length > 5) {
    value = value.slice(0, value.length - 1);
  }
  onChange(value);
};

export default TimeInsert;
