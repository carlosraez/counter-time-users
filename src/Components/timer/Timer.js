import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Hour } from './Hour';

export const Timer = ({ lastSignTime }) => {

	moment.locale('es', {
		longDateFormat : {
			LT: 'h:mm:ss A', 
			llll: 'ddd, MMM D YYYY LT',
		}
	});

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
			<Hour  
				value={days}
				label='days'
			/>
			<Hour
				value={hours}  
				label='hours'
			/>
			<Hour 
				value={minutes} 
				label='minutes'
			/>
			<Hour 
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