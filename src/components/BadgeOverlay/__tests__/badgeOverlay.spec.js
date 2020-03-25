import React from 'react';
import { mount } from 'enzyme';
import BadgeOverlay from '..';
import StyledComponent from '../styled/component';

const defaultProps = {
    value: undefined,
    overlap: 'rectangle',
    variant: 'error',
    isHidden: false,
    position: 'top-right',
    className: undefined,
    style: undefined,
};

describe('<BadgeOverlay/>', () => {
    it('should render the children when is passed', () => {
        const children = <div id="child" />;
        const component = mount(<BadgeOverlay>{children}</BadgeOverlay>);
        expect(component.contains(children)).toBe(true);
    });
    it('should not render when the children is not passed', () => {
        const component = mount(<BadgeOverlay {...defaultProps} />);
        expect(component.find(StyledComponent).exists()).toBe(false);
    });
    it('should render with right default props', () => {
        const children = <div id="child" />;
        const component = mount(<BadgeOverlay {...defaultProps}>{children}</BadgeOverlay>);

        expect(component.find(BadgeOverlay).props()).toEqual({ ...defaultProps, children });
    });
    it('should render the right value', () => {
        const children = <div id="child" />;
        const component = mount(<BadgeOverlay {...defaultProps}>{children}</BadgeOverlay>);
        expect(component.find(StyledComponent).text()).toBe('');
        component.setProps({
            value: 3,
        });
        expect(component.find(StyledComponent).text()).toBe('3');
        component.setProps({
            value: 1000,
        });
        expect(component.find(StyledComponent).text()).toBe('1k');
    });
    it('should not render when isHidden is true', () => {
        const children = <div id="child" />;
        const component = mount(<BadgeOverlay {...defaultProps}>{children}</BadgeOverlay>);
        expect(component.find(StyledComponent).exists()).toBe(true);
        component.setProps({
            isHidden: true,
        });
        expect(component.find(StyledComponent).exists()).toBe(false);
    });
});
