import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import ShowTime from '../ShowTime';
import TimeInsert from '../TimeInsert';
import { formatDuration, useStateWithLocalStorage } from '../Utils';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	worktime_root: {
		display: 'grid',
		gridTemplateColumns: '100%',
		gridTemplateAreas: `'title' 'timeInsert' 'timeShow'`,
		fontFamily: (props) => `'${props.font}', sans-serif`
	},
	worktime_title: {
		gridArea: 'title',
		margin: '1.25em 0',
		paggind: 0
	},
	workTime: {
		gridArea: 'timeInsert',
		display: 'grid',
		gridTemplateColumns: 'minmax(180px, 300px)',
		alignItems: 'center',
		rowGap: '5px'
	},

	worktime_show_root: {
		gridArea: 'timeShow',
		marginTop: '1.5em',
		display: 'grid',
		gridTemplateColumns: 'minmax(180px, 300px)'
	},
	'@media only screen and (min-width: 800px)': {
		worktime_root: {
			gridTemplateColumns: '1fr 30px 1fr',
			gridTemplateAreas: `'title title title'
			'timeInsert . timeShow'`,
			border: '1px solid rgba(0,0,0,0.5)',
			borderRadius: 8,
			boxShadow: '1px 1px 3px 0 var(--input-bg-color), -1px -1px 3px var(--input-border-color)',
			marginTop: '0.5rem',
			marginBottom: '0rem',
			padding: '1rem'
		}
	}
});

export const WorkTime = (props) => {
	const classes = useStyles(props);
	const [ times, setTimes ] = useStateWithLocalStorage('time', {
		morning: '',
		startPause: '',
		endPause: ''
	});

	const [ results, setResults ] = useState({
		atTheMoment: '',
		normally: '',
		max: '',
		pause: ''
	});

	useEffect(
		() => {
			calculateTime(times.morning, times.startPause, times.endPause, setResults);
		},
		[ times.endPause, times.morning, times.startPause ]
	);

	useInterval(() => {
		calculateTime(times.morning, times.startPause, times.endPause, setResults);
	}, 10000);

	return (
		<div className={classes.worktime_root}>
			<h1 className={classes.worktime_title}>Work Time!</h1>
			<div className={classes.workTime}>
				<TimeInsert
					label="Inizio:"
					value={times.morning}
					onChange={(value) => {
						setTimes({ ...times, morning: value });
					}}
				/>
				<TimeInsert
					label="Inizio pausa:"
					value={times.startPause}
					onChange={(value) => {
						setTimes({ ...times, startPause: value });
					}}
				/>
				<TimeInsert
					label="Fine pausa:"
					value={times.endPause}
					onChange={(value) => {
						setTimes({ ...times, endPause: value });
					}}
				/>
			</div>
			<div className={classes.worktime_show_root}>
				<ShowTime label="Al momento hai fatto" value={results.atTheMoment} />
				<ShowTime label="Pausa pranzo" value={results.pause} />
				<ShowTime label="8h alle" value={results.normally} />
				<ShowTime label="P.f. finisci prima delle" value={results.max} />
			</div>
		</div>
	);
};

const l = (m) => {
	if (!m.isValid()) return '';
	return m.format('HH:mm');
};

function calculateTime(begin, startPause, endPause, setResults) {
	const mBegin = moment(begin, 'HH:mm');
	const mStartPause = moment(startPause, 'HH:mm');
	const minPause = mStartPause.clone().add(30, 'm');
	const mTEndPause = moment(endPause, 'HH:mm');
	const mEndPause = moment.max(minPause, mTEndPause);
	const totalDue = moment.duration(8, 'hours');
	const morningD = moment.duration(mStartPause.diff(mBegin));
	const actualDuration = moment.duration(moment().diff(mEndPause)).add(morningD);
	const left = totalDue.clone().subtract(morningD);
	const whenFinish = mEndPause.clone().add(left);
	const whenFinishMaximum = whenFinish.clone().add(moment.duration(1, 'hours').add(36, 'm'));
	let atTheMoment = formatDuration(actualDuration);
	let normally = l(whenFinish);
	let max = l(whenFinishMaximum);
	setResults({
		atTheMoment,
		normally,
		max,
		pause: formatDuration(moment.duration(mEndPause.diff(mStartPause)))
	});
}

function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(
		() => {
			savedCallback.current = callback;
		},
		[ callback ]
	);

	// Set up the interval.
	useEffect(
		() => {
			function tick() {
				savedCallback.current();
			}
			if (delay !== null) {
				let id = setInterval(tick, delay);
				return () => clearInterval(id);
			}
		},
		[ delay ]
	);
}
