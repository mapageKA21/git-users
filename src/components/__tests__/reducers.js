import * as actions from '../../store/actionCreators/getUsers';
import * as reducer from '../../store/reducers/users';
import { MOCK_FIRST_USERS, MOCK_SECOND_USERS } from '../../constants';

describe('actions', () => {
	it('should create an action to save the initial users', () => {
		const expectedAction = {
			type: 'SAVE_USERS',
			payload: MOCK_FIRST_USERS
		};
		expect(actions.getUsers(MOCK_FIRST_USERS)).toEqual(expectedAction);
    });
    it('should create an action to get more users', () => {
		const expectedAction = {
			type: 'ADD_USERS',
			payload: MOCK_SECOND_USERS
		};
		expect(actions.addUsers(MOCK_SECOND_USERS)).toEqual(expectedAction);
	});
});

describe('users reducer', () => {
	it('should return the initial state', () => {
		expect(reducer.users(undefined, {})).toEqual([]);
	});
	it('should save the initial users', () => {
		expect(reducer.users([], { type: 'SAVE_USERS', payload: MOCK_FIRST_USERS })).toEqual(MOCK_FIRST_USERS);
	});
	it('should add more users', () => {
		expect(reducer.users(MOCK_FIRST_USERS, { type: 'ADD_USERS', payload: MOCK_SECOND_USERS })).toEqual(MOCK_FIRST_USERS.concat(MOCK_SECOND_USERS));
	});
});
