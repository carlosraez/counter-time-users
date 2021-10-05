import React from 'react';
import PropTypes from 'prop-types';

export const Hour = ({ hourNumber,label }) => {
	return (
		<div className="hour_format">
			<div className="hour_number">{hourNumber}</div>
			<div className="hour_label">{label}</div>
		</div>
	);
};

Hour.propTypes = {
	label: PropTypes.string,
	hourNumber: PropTypes.number
};