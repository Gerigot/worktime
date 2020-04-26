import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  label:{
    fontWeight: 'bold',
  }

});
const ShowTime = ({ label, value }) => {
	const classes = useStyles();
	return (
			<>
      <div className={classes.label}>{label}:</div>
			<div className={classes.showTimeValue}>{value}</div>
		</>
	);
};

export default ShowTime;
