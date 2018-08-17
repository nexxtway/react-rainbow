import React from 'react';
import { mount } from 'enzyme';
import IconSvg from './../index';

describe('<IconSvg/>', () => {
    it('should return nothing when the iconName format is wrong', () => {
        const component = mount(
            <IconSvg iconName="wrong-name" />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should render the svg element when the iconName format is valid', () => {
        const component = mount(
            <IconSvg iconName="utility:like" />,
        );
        expect(component.find('svg').exists()).toBe(true);
    });
    it('should set the aria-hidden to true in svg element', () => {
        const component = mount(
            <IconSvg iconName="utility:like" />,
        );
        expect(component.find('svg').prop('aria-hidden')).toBe(true);
    });
    it('should set the right xlinkHref value in use element', () => {
        const component = mount(
            <IconSvg iconName="action:add_contact" />,
        );
        expect(component.find('use').prop('xlinkHref')).toBe('/icons/action-sprite/svg/symbols.svg#add_contact');
    });
});
