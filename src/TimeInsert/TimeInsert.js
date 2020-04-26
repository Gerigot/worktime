import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	time: {
		padding: 5,
    fontSize: 'inherit',
    fontFamily: 'inherit',
    outline: 'none',
    color: 'white',
    backgroundColor: '#353535',
    border: '2px solid #595959',
    borderRadius: '5px'
	}
});
function TimeInsert({ value, onChange, label }) {
	const classes = useStyles();
	return (
		<>
			<div className={classes.label}>{label}</div>
			<input className={classes.time} value={value} onChange={verifyValue(onChange)} />
		</>
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
