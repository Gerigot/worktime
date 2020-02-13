import {formatDuration} from './TimeUtils';
import moment from 'moment';

test('formatAtTheMoment', () => {
  expect(formatDuration(moment.duration(-15))).toBe("0:00");
  expect(formatDuration(moment.duration(10))).toBe("0:00");
  expect(formatDuration(moment.duration(60000))).toBe("0:01");
  expect(formatDuration(moment.duration(-60000))).toBe("-0:01");
  expect(formatDuration(moment.duration(3600000))).toBe("1:00");
  expect(formatDuration(moment.duration(-3600000))).toBe("-1:00");
});