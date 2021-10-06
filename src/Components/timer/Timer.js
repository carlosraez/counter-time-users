import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Hour } from './Hour';

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
		
		let seconds = Math.abs(pastTime._data.seconds);
		let minutes = Math.abs(pastTime._data.minutes);
		let hours = Math.abs(pastTime._data.hours);
		let days = Math.abs(pastTime._data.days);
		
		setstate({
			days:  days < 10 ? `0${days}` : days,
			hours: hours < 10 ? `0${hours}` : hours,
			minutes: minutes < 10 ? `0${minutes}` : minutes,
			seconds: seconds < 10 ? `0${seconds}` : seconds,
		});
	
	}, [actualTime]);

	useEffect(() => {
		
		moment.locale('es', {
			longDateFormat : {
				LT: 'h:mm:ss A', 
				L: 'MM/DD/YYYY',
				l: 'M/D/YYYY',
				LL: 'MMMM Do YYYY',
				ll: 'MMM D YYYY',
				LLL: 'MMMM Do YYYY LT',
				lll: 'MMM D YYYY LT',
				LLLL: 'dddd, MMMM Do YYYY LT',
				llll: 'ddd, MMM D YYYY LT'
			}
		});

		setInterval(() => {
	
			let getTime = moment().format('llll');
			setActualTime(getTime);
		}, 1000);
	
	}, []);

	return (
		<div className="timer_container">
			<Hour  
				hourNumber={days}
				label='days'
			/>
			<Hour
				hourNumber={hours}  
				label='hours'
			/>
			<Hour 
				hourNumber={minutes} 
				label='minutes'
			/>
			<Hour 
				hourNumber={seconds} 
				label='seconds'
			/>
		</div>
	);
};

Timer.propTypes = {
	lastSignTime: PropTypes.string
};