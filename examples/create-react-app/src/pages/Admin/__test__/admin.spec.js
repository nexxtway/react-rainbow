import React from 'react';
import { shallow } from 'enzyme';
import Header from './../header';
import SideNavigation from './../sideNavigation';
import AccountPage from './../accountPage';
import AdminExample from '..';

describe('<AdminExample/>', () => {
    it('should render the Admin', () => {
        const component = shallow(
            <AdminExample />,
        );
        expect(component.find(Header).exists()).toBe(true);
        expect(component.find(SideNavigation).exists()).toBe(true);
        expect(component.find(AccountPage).exists()).toBe(true);
    });
});
