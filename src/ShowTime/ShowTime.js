import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	label: {
		fontWeight: 'bold'
	},
	showTimeValue: {
		marginBottom: '1em'
	}
});
const ShowTime = ({ label, value }) => {
	const classes = useStyles();
	return (
		<Fragment>
			<div className={classes.label}>{label}:</div>
			<div className={classes.showTimeValue}>{value}</div>
		</Fragment>
	);
};

export default ShowTime;
