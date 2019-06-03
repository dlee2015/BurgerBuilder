import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
	let wrapper = null;

	beforeEach(() => {
		wrapper = shallow(<NavigationItems />);
	});

	it('should render two navigation elements if not authenticated', () => {
		expect(wrapper.find(NavigationItem)).toHaveLength(2);
	});
	it('should render three navigation elements if authenticated', () => {
		//wrapper = shhallow(<NavigationItems authenticated />)
		wrapper.setProps({ authenticated: true });
		expect(wrapper.find(NavigationItem)).toHaveLength(3);
	});

	it('should render logout if authenticated', () => {
		wrapper.setProps({ authenticated: true });
		expect(
			wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)
		).toEqual(true);
	});
});
