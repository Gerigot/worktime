import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	timeContainer:{
		position: 'relative',
		'&:focus-within > $label':{
			position: 'absolute',
			top: '-0.75em',
			left: '1em',
			fontSize: '0.5rem',
			zIndex: 2,
			'&::before':{
				content: '""',
				position: 'absolute',
				top: -10,
				left: '-.5em',
				right: '-.5em',
				bottom: '0.25em',
				background: 'var(--main-bg-color)',
				zIndex: -1,
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
	label: (props)=>{
		const common = {
			transition: 'top 250ms ease, left 250ms ease, font-size 250ms ease'
		};
		if(props.value){
			return {
				...common,
				position: 'absolute',
				top: '-0.75em',
				left: '1em',
				zIndex: 2,
				fontSize: '0.5rem',
				'&::before':{
					content: '""',
					position: 'absolute',
					top: -10,
					left: '-.5em',
					right: '-.5em',
					bottom: '0.25em',
					background: 'var(--main-bg-color)',
					zIndex: -1,
				}
			};
		}
		return {
			...common,
			position: 'absolute',
			fontSize: '0.8rem',
			top: '0.5em',
			left: '1em',
			
		}	
	},
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
