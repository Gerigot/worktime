export const formatDuration = (actualDuration) => {
	console.log({ actualDuration });
	if (!actualDuration.isValid()) {
		return '';
	}
	let minutes = Math.abs(actualDuration.minutes());
	let hours = Math.abs(actualDuration.hours());
	if (actualDuration.minutes() < 0) {
		return '-' + hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
	}
	return (
		actualDuration.hours() +
		':' +
		(actualDuration.minutes() < 10 ? '0' + actualDuration.minutes() : actualDuration.minutes())
	);
};
