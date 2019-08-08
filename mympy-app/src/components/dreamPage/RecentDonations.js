import React from 'react';

import './recentDonations.scss';
import demo from '../../img/demo.jpg';

const RecentDonations = (props) => {
	console.log(props.donations);
	return (
		<div className="recent-donations">
			<h2 className="header">Recent Donations</h2>
  		
  		<div className="donations-container">
				{props.donations.slice(0,5).map( donation => {
					return <div className="donation" key={donation.donation}>
						<img className="user-img" src={demo} alt="" />
						<div className="donations-name-wrapper">
							<h2 className="amount">{"$" + donation.donation}</h2>
							<p className="name">{"by " + donation.user.firstname}</p>
						</div>
					</div>
				})}
  		</div>
   	</div>
	)
}

export default RecentDonations;