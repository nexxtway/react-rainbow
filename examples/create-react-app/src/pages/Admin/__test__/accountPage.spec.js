import React from 'react';
import { mount } from 'enzyme';
import Card from 'react-rainbow-components/components/Card';
import Badge from 'react-rainbow-components/components/Badge';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import AccountPage from './../accountPage';

describe('<Account Page in AdminExample/>', () => {
    it('should render the AccountPage', () => {
        const component = mount(
            <AccountPage />,
        );
        expect(component.find(Card).exists()).toBe(true);
        expect(component.find(Badge).exists()).toBe(true);
        expect(component.find(ButtonGroup).exists()).toBe(true);
        expect(component.find(ButtonIcon).exists()).toBe(true);
    });
});
