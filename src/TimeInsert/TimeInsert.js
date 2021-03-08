import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	timeContainer:{
		position: 'relative',
		'&:focus-within > $label':{
			transform: 'translate(-.75em, -1em) scale(0.75, 0.75)',
			zIndex: 2,
			'&::before': {
				opacity: 1,
			}
		}
	},
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
	},
	label: {
			transition: 'transform 250ms ease',
			position: 'absolute',
			top: '0.25em',
			left: '.75em',
			zIndex: 2,
			transform: ({value})=> value ? 'translate(-.85em, -1em) scale(0.75, 0.75)' : '',
			'&::before':{
				content: '""',
				position: 'absolute',
				top: '0',
				left: '0',
				right: '0',
				bottom: '0',
				background: 'linear-gradient(180deg, var(--main-bg-color), var(--input-bg-color))',
				zIndex: -1,
				transition: 'opacity 300ms ease',
				opacity: ({value}) => value ? 1 :0,
			},


	}
});
function TimeInsert({ value, onChange, label }) {
	const classes = useStyles({value});
	return (
		<div className={classes.timeContainer}>
			<div className={classes.label}>{label}</div>
			<input className={classes.time} value={value} onChange={verifyValue(onChange)} />
		</div>
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
