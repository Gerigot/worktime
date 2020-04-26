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
		'@media (min-width: 500px)': {
			html: {
				fontSize: '18px'
			}
		},
		'@media (min-width: 800px)': {
			html: {
				fontSize: '20px'
			}
		},
		body: {
			margin: 'auto',
			backgroundColor: '#3f3f3f',
			color: 'white',
			width: '100%',
			maxWidth: 600
		}
	},
	app_root: {
		margin: '1.5em'
	}
});
function App() {
	const [ font, setFont ] = useStateWithLocalStorage('defaultFont', 'Open Sans');
	const classes = useStyles({ font });
	return (
		<div className={classes.app_root}>
			<FontChanger value={font} onChange={setFont} />
			<WorkTime font={font} />
		</div>
	);
}

export default App;
