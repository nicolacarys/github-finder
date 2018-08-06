import React from 'react';

import './Card/card.css';

export default ({ errorHelpText }) => (
	<h2 className="error">{ errorHelpText }</h2>
)