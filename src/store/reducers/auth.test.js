import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			token: null,
			userId: null,
			error: null,
			loading: false,
			authRedirect: '/'
		});
	});

	it('should store token upon login', () => {
		expect(
			reducer(
				{
					token: null,
					userId: null,
					error: null,
					loading: false,
					authRedirect: '/'
				},
				{
					type: actionTypes.AUTH_SUCCESS,
					userId: 'userId',
					error: null,
					loading: false,
					token: 'bigtoken'
				}
			)
		).toEqual({
			token: 'bigtoken',
			userId: 'userId',
			error: null,
			loading: false,
			authRedirect: '/'
		});
	});
});
