import React from 'react';
import PropTypes from 'prop-types';

export const TimerItem  = ({ value,label }) => {
	return (
		<div className="timerItem_format">
			<div className="timerItem_number">{value}</div>
			<div className="timerItem_label">{label}</div>
		</div>
	);
};

TimerItem.propTypes = {
	label: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
};