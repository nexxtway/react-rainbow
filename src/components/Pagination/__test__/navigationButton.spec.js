import React from 'react';
import { mount } from 'enzyme';
import NavigationButton from '../navigationButton';

describe('<NavigationButton />', () => {
    it('should call the onClick function when clicked', () => {
        const onCkickMockFn = jest.fn();
        const component = mount(<NavigationButton onClick={onCkickMockFn} icon={<span />} />);
        const anchor = component.find('a');
        anchor.simulate('click');
        expect(onCkickMockFn).toHaveBeenCalledTimes(1);
    });
    it('should not call the onClick function when clicked if disabled', () => {
        const onCkickMockFn = jest.fn();
        const component = mount(
            <NavigationButton onClick={onCkickMockFn} icon={<span />} disabled />,
        );
        const anchor = component.find('a');
        anchor.simulate('click');
        expect(onCkickMockFn).toHaveBeenCalledTimes(0);
    });
    it('should set the aria-disabled to the anchor element if disabled', () => {
        const onCkickMockFn = jest.fn();
        const component = mount(
            <NavigationButton onClick={onCkickMockFn} icon={<span />} disabled />,
        );
        const anchor = component.find('a');
        expect(anchor.prop('aria-disabled')).toBe(true);
    });
});
