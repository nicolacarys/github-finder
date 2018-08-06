import React from 'react';

export default ({ value, changeHandler }) => (
	<input 
		type="text" 
		name="username" 
		value={ value } 
		placeholder="Enter a GitHub username"
		onChange={ changeHandler } 
	/>
)