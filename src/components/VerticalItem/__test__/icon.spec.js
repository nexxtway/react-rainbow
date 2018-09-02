import React from 'react';
import { mount } from 'enzyme';
import Icon from './../icon';

describe('<VerticalItemIcon/>', () => {
    it('should not render the icon when is not passed', () => {
        const component = mount(
            <Icon />,
        );
        expect(component.find('.rainbow-nav-vertical_icon').exists()).toBe(false);
    });
    it('should render the icon when is passed', () => {
        const component = mount(
            <Icon icon={<svg />} />,
        );
        expect(component.find('svg').exists()).toBe(true);
    });
    it('should pass the right className to the span element when the icon is passed', () => {
        const component = mount(
            <Icon icon={<svg />} />,
        );
        expect(component.find('.rainbow-nav-vertical_icon').prop('className')).toBe('rainbow-nav-vertical_icon');
    });
});
