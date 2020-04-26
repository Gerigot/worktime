import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	root: {
		fontFamily: (props) => `'${props.font}', sans-serif`,
		fontSize: '.75rem'
	},
	select: {
		fontSize: '1em',
		fontFamily: 'inherit',
		margin: '0px 5px 5px 10px'
	}
});

export const FontChanger = ({ onChange, value }) => {
	const classes = useStyles({ font: value });
	return (
		<label htmlFor="fonts" className={classes.root}>
			Font:
			<select
				className={classes.select}
				id="fonts"
				onChange={(event) => onChange(event.target.value)}
				value={value}
			>
				<option value="Open Sans">Open Sans</option>
				<option value="Montserrat">Montserrat</option>
				<option value="Lato">Lato</option>
				<option value="Raleway">Raleway</option>
			</select>
		</label>
	);
};
