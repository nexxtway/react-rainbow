import React from 'react';
import { mount } from 'enzyme';
import Icon from './../icon';

describe('<VerticalItemIcon/>', () => {
    it('should not render the Icon when the iconName is not passed', () => {
        const component = mount(
            <Icon />,
        );
        expect(component.find('Icon').exists()).toBe(false);
    });
    it('should render the Icon when the iconName is passed', () => {
        const component = mount(
            <Icon iconName="utility:user" />,
        );
        expect(component.find('Icon').exists()).toBe(true);
    });
    it('should pass the right props to Icon component when the iconName is passed', () => {
        const component = mount(
            <Icon iconName="utility:user" />,
        );
        expect(component.find('Icon').props()).toEqual(expect.objectContaining({
            iconName: 'utility:user',
            className: 'slds-line-height_reset',
            svgClassName: 'slds-m-right_x-small',
            size: 'x-small',
        }));
    });
});
