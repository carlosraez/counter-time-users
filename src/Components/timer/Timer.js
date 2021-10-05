import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Hour } from './Hour';

export const Timer = ({ lastSignTime }) => {
	console.log(lastSignTime);
	const [state, setstate] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const { days ,hours ,minutes ,seconds } = state;

	useEffect(() => {

		const actualTime = moment().format('LLLL');
		const addHoursToSpain = moment(lastSignTime).add(2, 'hours');
		const pastTime = moment.duration(addHoursToSpain.diff(actualTime));
		setstate({
			days: pastTime._data.days === 0 ? '00' : pastTime._data.days,
			hours: pastTime._data.hours,
			minutes: pastTime._data.minutes,
			seconds: pastTime._data.seconds,
		});
	
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