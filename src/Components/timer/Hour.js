import React from 'react';
import PropTypes from 'prop-types';

export const Hour = ({ value,label }) => {
	return (
		<div className="hour_format">
			<div className="hour_number">{value}</div>
			<div className="hour_label">{label}</div>
		</div>
	);
};

Hour.propTypes = {
	label: PropTypes.string,
	value: PropTypes.number
};