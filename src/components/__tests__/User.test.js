import React from 'react';
import UserItem from '../UserItem';
import { shallow } from 'enzyme';
import { MOCK_USER } from '../../constants';

const wrapper = shallow(<UserItem key={MOCK_USER.id} user={MOCK_USER}/>);

describe('UserItem Component', () => {
	it('should render a table row', () => {
		expect(wrapper.find('tr').exists()).toBe(true)
	})
	it('renders three data cells', () => {
		expect(wrapper.find('td').length).toEqual(3)
	})
	it('renders the correct img src', () => {wrapper.find('[foo=3]');
		expect(wrapper.find(`[src="${MOCK_USER.avatar_url}"]`).exists()).toBe(true);
	})
	it('renders the user login', () => {
		expect(wrapper.find('tr').childAt(1).text()).toEqual(MOCK_USER.login);
	})
	it('last td should contain a bootstrap Button', () => {
		expect(wrapper.find('tr').childAt(2).text()).toEqual('<Button />');
	})
});
