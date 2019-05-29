import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token, userId) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		idToken: token,
		userId: userId
	};
};

export const authFail = error => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

export const auth = (email, password, isSignup) => {
	return dispatch => {
		dispatch(authStart());
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		};
		let url =
			'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAR1C5uOLUokeGsNyC3G97_EJYCMfPnr7c';
		if (!isSignup) {
			url =
				'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAR1C5uOLUokeGsNyC3G97_EJYCMfPnr7c';
		}
		axios
			.post(url, authData)
			.then(response => {
				console.log(response);
				dispatch(authSuccess(response.data.idToken, response.data.localId));
			})
			.catch(err => {
				console.log(authData);
				console.log(err);
				dispatch(authFail(err));
			});
	};
};
