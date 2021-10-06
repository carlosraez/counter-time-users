import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { TimerItem } from './TimerItem';

moment.locale('es', {
	longDateFormat : {
		LT: 'h:mm:ss A', 
		llll: 'ddd, MMM D YYYY LT',
	}
});

const _formatHourString = (itemHour) => {
	return (itemHour < 10 ? `0${itemHour}` : itemHour);
};

export const Timer = ({ lastSignTime }) => {

	const [actualTime, setActualTime] = useState(moment().format('llll'));
	const [state, setstate] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const { days ,hours ,minutes ,seconds } = state;

	useEffect(() => {

		const addHoursToSpain = moment(lastSignTime);
		const pastTime = moment.duration(addHoursToSpain.diff(actualTime));
		
		const seconds = Math.abs(pastTime.seconds());
		const minutes = Math.abs(pastTime.minutes());
		const hours = Math.abs(pastTime.hours());
		const days = Math.abs(pastTime.days());

		setstate({
			days: _formatHourString(days),
			hours: _formatHourString(hours),
			minutes: _formatHourString(minutes),
			seconds: _formatHourString(seconds),
		});
	
	}, [actualTime]);

	useEffect(() => {

		const intervalID =   setInterval(() => {
			const getTime = moment().format('llll');
			setActualTime(getTime);
		}, 1000);

		return () => {
			clearInterval(intervalID);
		};
			
	}, []);

	return (
		<div className="timer_container">
			<TimerItem  
				value={days}
				label='days'
			/>
			<TimerItem  
				value={hours}  
				label='hours'
			/>
			<TimerItem   
				value={minutes} 
				label='minutes'
			/>
			<TimerItem   
				value={seconds} 
				label='seconds'
			/>
		</div>
	);
};

Timer.propTypes = {
	lastSignTime: PropTypes.string,
};