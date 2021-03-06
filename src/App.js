import React from 'react';
import { FontChanger } from './FontChanger/FontChanger';
import { WorkTime } from './WorkTime/WorkTime';
import { useStateWithLocalStorage } from './Utils';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	'@global': {
		'*, *::after, *::before': {
			boxSizing: 'border-box'
		},
		':root': {
			'--main-bg-color': '#3f3f3f',
			'--default-color': 'white',
			'--input-bg-color': '#353535',
			'--input-border-color': '#595959',
			'--input-focus-border-color': '#8c8c8c'
		},
		body: {
			margin: 'auto',
			backgroundColor: 'var(--main-bg-color)',
			color: 'var(--default-color)',
			width: '100%',
			maxWidth: 600
		},
		'@media (min-width: 500px)': {
			html: {
				fontSize: '18px'
			}
		},
		'@media (min-width: 800px)': {
			html: {
				fontSize: '20px'
			},
		},
		'@media (min-width: 1300px)':{
			html:{
				fontSize: '26px'
			},
			body: {
				maxWidth: '1000px',
			}
		},
	},
	app_root: {
		margin: '1.5em 1.5em 0 1.5em',
	}
});
function App() {
	const [ font, setFont ] = useStateWithLocalStorage('defaultFont', 'Open Sans');
	const classes = useStyles();
	return (
		<div className={classes.app_root}>
			<FontChanger value={font} onChange={setFont} />
			<WorkTime font={font} />
		</div>
	);
}

export default App;
