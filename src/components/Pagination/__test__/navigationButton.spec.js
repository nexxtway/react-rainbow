import React from 'react';
import { mount } from 'enzyme';
import NavigationButton from '../navigationButton';

describe('<NavigationButton />', () => {
    it('should call the onClick function when clicked', () => {
        const onCkickMockFn = jest.fn();
        const component = mount(<NavigationButton onClick={onCkickMockFn} icon={<span />} />);
        const button = component.find('button');
        button.simulate('click');
        expect(onCkickMockFn).toHaveBeenCalledTimes(1);
    });
    it('should not call the onClick function when clicked if disabled', () => {
        const onCkickMockFn = jest.fn();
        const component = mount(
            <NavigationButton onClick={onCkickMockFn} icon={<span />} disabled />,
        );
        const button = component.find('button');
        button.simulate('click');
        expect(onCkickMockFn).toHaveBeenCalledTimes(0);
    });
    it('should set the aria-disabled to the button element if disabled', () => {
        const onCkickMockFn = jest.fn();
        const component = mount(
            <NavigationButton onClick={onCkickMockFn} icon={<span />} disabled />,
        );
        const button = component.find('button');
        expect(button.prop('aria-disabled')).toBe(true);
    });
});
