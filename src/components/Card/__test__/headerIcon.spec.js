import React from 'react';
import { mount } from 'enzyme';
import HeaderIcon from './../headerIcon';
import Icon from '../../Icon';

describe('<HeaderIcon/>', () => {
    it('should set the iconName passed as the prop iconName in the Icon', () => {
        const component = mount(
            <HeaderIcon iconName="standard:contact" />,
        );
        expect(component.find(Icon).prop('iconName')).toBe('standard:contact');
    });
    it('should render the Icon when iconName is passed', () => {
        const component = mount(
            <HeaderIcon iconName="standard:contact" />,
        );
        expect(component.find(Icon).exists()).toBe(true);
    });
});
