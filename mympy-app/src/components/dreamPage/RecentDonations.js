import React from 'react';

import './recentDonations.scss';
import demo from '../../img/demo.jpg';
import { connect } from 'react-redux';
import { dreamPayFetch } from '../../actions/stripe.js';

class RecentDonations extends React.Component {

	componentDidMount() {
		console.log(this.props.currDream)
		this.props.dreamPayFetch(this.props.currDream.id);
	}

	render() {
		return (
			<div>
				{this.props.dreamPayments[0] && <div className="recent-donations">
					<h2 className="header">Recent Donations</h2>

					<div className="donations-container">
						{this.props.dreamPayments.slice(0, 5).map(donation => {
							return <div className="donation" key={donation.id}>
								<img className="user-img" src={donation.img_url} alt="" />
								<div className="donations-name-wrapper">
									<h2 className="amount">{"$" + donation.donation_amount}</h2>
									<p className="name">{"by " + donation.user_name.split(' ')[0]}</p>
								</div>
							</div>
						})}
					</div>
				</div>}
			</div>
		)
	}
}

const mapStateToProps = ({ stripe, dreams }) => {
	return {
		dreamPayments: stripe.dreamPayments,
		currDream: dreams.currDream,
	}
}

export default connect(mapStateToProps, { dreamPayFetch })(RecentDonations);