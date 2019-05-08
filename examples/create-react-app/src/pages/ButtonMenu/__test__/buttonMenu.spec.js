import React from 'react';
import { shallow } from 'enzyme';
import ButtonMenu from 'react-rainbow-components/components/ButtonMenu';
import MenuItem from 'react-rainbow-components/components/MenuItem';
import MenuDivider from 'react-rainbow-components/components/MenuDivider';
import ButtonMenuExample from './../';

describe('<ButtonMenuExample/>', () => {
    it('should render the ButtonMenu', () => {
        const component = shallow(<ButtonMenuExample />);
        expect(component.find(ButtonMenu).exists()).toBe(true);
        expect(component.find(MenuItem).exists()).toBe(true);
        expect(component.find(MenuDivider).exists()).toBe(true);
    });
});
