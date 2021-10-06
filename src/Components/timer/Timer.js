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
		
		let seconds = Math.abs(pastTime.seconds());
		let minutes = Math.abs(pastTime.minutes());
		let hours = Math.abs(pastTime.hours());
		let days = Math.abs(pastTime.days());

		setstate({
			days:  days < 10 ? `0${days}` : days,
			hours: hours < 10 ? `0${hours}` : hours,
			minutes: minutes < 10 ? `0${minutes}` : minutes,
			seconds: seconds < 10 ? `0${seconds}` : seconds,
		});
	
	}, [actualTime]);

	useEffect(() => {

		const intervalID =   setInterval(() => {
			let getTime = moment().format('llll');
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
	lastSignTime: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
};