import React from 'react';
import { shallow } from 'enzyme';
import Input from 'react-rainbow-components/components/Input';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import ButtonMenu from 'react-rainbow-components/components/ButtonMenu';
import Avatar from 'react-rainbow-components/components/Avatar';
import MenuItem from 'react-rainbow-components/components/MenuItem';
import Header from './../header';

describe('<Header in AdminExample/>', () => {
    it('should render the Header', () => {
        const component = shallow(<Header />);
        expect(component.find(Input).exists()).toBe(true);
        expect(component.find(ButtonGroup).exists()).toBe(true);
        expect(component.find(ButtonIcon).exists()).toBe(true);
        expect(component.find(ButtonMenu).exists()).toBe(true);
        expect(component.find(Avatar).exists()).toBe(true);
        expect(component.find(MenuItem).exists()).toBe(true);
    });
});
