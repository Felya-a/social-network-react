import React from 'react';
import { connect } from 'react-redux';
import { authMeThunkCreator } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {

	render() {
		return (
			<Header {...this.props} />
		)
	}
}

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth, 
	login: state.auth.login,
})

export default connect(mapStateToProps, {})(HeaderContainer);