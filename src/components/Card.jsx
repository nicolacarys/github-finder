import React from 'react';

import './Card/card.css';

export default ({ userData }) => (
	<div>
		<div className="title-block">
			<img alt="user avatar" src={ userData.avatar_url }/>

			<div className="title-block__details">
				<h2>User: { userData.login }</h2>
				<h3>Name: { userData.name }</h3>
				<h3>
					Company: { userData.company ? userData.company : "No company information provided" }
				</h3>
			</div>
		</div>

		<h2 className="user-bio">{ userData.bio && userData.bios }</h2>

		<div className="stat-block">
			<div className="stat-block__stat">
				<h1>{ userData.public_repos }</h1>
				<p>Public repos</p>
			</div>
			
			<div className="stat-block__stat">
				<h1>{ userData.followers }</h1>
				<p>Followers</p>
			</div>
			
			<div className="stat-block__stat">
				<h1>{ userData.following }</h1>
				<p>Following</p>
			</div>

		</div>

	</div>
)