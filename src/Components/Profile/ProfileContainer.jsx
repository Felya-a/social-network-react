import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { getUserProfileThunkCreator, setUserProfile, setStatusThunkCreator, getStatusThunkCreator, savePhotoThunkCreator } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

	refreshProfile() {
		let userID = this.props.match.params.userId || this.props.userLoginID;
		this.props.getStatusThunkCreator(userID);
		this.props.getUserProfileThunkCreator(userID);
	}

	componentWillMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.userId != prevProps.match.params.userId
			|| this.props.userLoginID != prevProps.userLoginID) this.refreshProfile();
	}

	render() {
		return (
			<Profile {...this.props} savePhoto={this.props.savePhotoThunkCreator} isOwner={!this.props.match.params.userId}/>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	userLoginID: state.auth.id,
})

export default compose(
	connect(mapStateToProps, { setUserProfile, getUserProfileThunkCreator, setStatusThunkCreator, getStatusThunkCreator, savePhotoThunkCreator}),
	withRouter,
	// withAuthRedirect,
)(ProfileContainer)