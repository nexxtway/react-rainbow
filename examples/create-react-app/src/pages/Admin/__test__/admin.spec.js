import React from 'react';
import { shallow } from 'enzyme';
import Card from 'react-rainbow-components/components/Card';
import Input from 'react-rainbow-components/components/Input';
import Badge from 'react-rainbow-components/components/Badge';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import VerticalNavigation from 'react-rainbow-components/components/VerticalNavigation';
import VerticalSection from 'react-rainbow-components/components/VerticalSection';
import VerticalSectionOverflow from 'react-rainbow-components/components/VerticalSectionOverflow';
import VerticalItem from 'react-rainbow-components/components/VerticalItem';
import ButtonMenu from 'react-rainbow-components/components/ButtonMenu';
import Avatar from 'react-rainbow-components/components/Avatar';
import MenuItem from 'react-rainbow-components/components/MenuItem';
import AdminExample from '..';

describe('<AdminExample/>', () => {
    it('should render the Admin', () => {
        const component = shallow(
            <AdminExample />,
        );
        expect(component.find(Card).exists()).toBe(true);
        expect(component.find(Input).exists()).toBe(true);
        expect(component.find(Badge).exists()).toBe(true);
        expect(component.find(ButtonGroup).exists()).toBe(true);
        expect(component.find(ButtonIcon).exists()).toBe(true);
        expect(component.find(ButtonMenu).exists()).toBe(true);
        expect(component.find(Avatar).exists()).toBe(true);
        expect(component.find(MenuItem).exists()).toBe(true);
        expect(component.find(VerticalItem).exists()).toBe(true);
        expect(component.find(VerticalNavigation).exists()).toBe(true);
        expect(component.find(VerticalSection).exists()).toBe(true);
        expect(component.find(VerticalSectionOverflow).exists()).toBe(true);
    });
});
