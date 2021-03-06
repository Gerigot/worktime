import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	time: {
		padding: 5,
		fontSize: 'inherit',
		fontFamily: 'inherit',
		outline: 'none',
		color: 'white',
		backgroundColor: 'var(--input-bg-color)',
		border: '2px solid var(--input-border-color)',
		borderRadius: '5px',
		marginBottom: '1em',
		'&:focus': {
			border: '2px solid var(--input-focus-border-color)'
		}
	}
});
function TimeInsert({ value, onChange, label }) {
	const classes = useStyles();
	return (
		<Fragment>
			<div className={classes.label}>{label}</div>
			<input className={classes.time} value={value} onChange={verifyValue(onChange)} />
		</Fragment>
	);
}

const verifyValue = (onChange) => (event) => {
	let value = event.target.value;

	if (value.length > 5) {
		value = value.slice(0, value.length - 1);
	}
	onChange(value);
};

export default TimeInsert;
