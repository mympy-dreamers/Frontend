import React from 'react';

import './recentDonations.scss';

const RecentDonations = (props) => {
	return (
		<div className="recent-donations">
			<h2 className="header">Recent Donations</h2>
  		
  		<div className="donations-container">
				{props.donations.map( donation => {
					return <div className="donation" key={donation.donation}>
						<img className="user-img"/>
						<div className="donations-name-wrapper">
							<h2 className="amount">{"$" + donation.donation}</h2>
							<p className="name">{donation.user.firstname + " " + donation.user.lastname}</p>
						</div>
					</div>
				})}
  		</div>
   	</div>
	)
}

export default RecentDonations;