import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator, setUserProfile, setStatusThunkCreator, getStatusThunkCreator } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

	componentWillMount() {
		let userID = this.props.match.params.userId || this.props.userLoginID;
		this.props.getStatusThunkCreator(userID);
		this.props.getUserProfileThunkCreator(userID);
	}

	render() {
		return (
			<Profile {...this.props} />
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	userLoginID: state.auth.id,
})

export default compose(
	connect(mapStateToProps, { setUserProfile, getUserProfileThunkCreator, setStatusThunkCreator, getStatusThunkCreator }),
	withRouter,
	withAuthRedirect,
)(ProfileContainer)