import React from 'react';
import { mount } from 'enzyme';
import BadgeOverlay from '..';
import StyledBadge from '../styled/badge';

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
        expect(component.find(StyledBadge).exists()).toBe(false);
    });
    it('should render with right default props', () => {
        const children = <div id="child" />;
        const component = mount(<BadgeOverlay {...defaultProps}>{children}</BadgeOverlay>);

        expect(component.find(BadgeOverlay).props()).toEqual({ ...defaultProps, children });
    });
    it('should render the right value', () => {
        const children = <div id="child" />;
        const component = mount(<BadgeOverlay {...defaultProps}>{children}</BadgeOverlay>);
        expect(component.find(StyledBadge).text()).toBe('');
        component.setProps({
            value: 3,
        });
        expect(component.find(StyledBadge).text()).toBe('3');
        component.setProps({
            value: 1000,
        });
        expect(component.find(StyledBadge).text()).toBe('1k');
    });
});
