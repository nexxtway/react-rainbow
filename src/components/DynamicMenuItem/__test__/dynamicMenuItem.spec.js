import React from 'react';
import { mount } from 'enzyme';
import DynamicMenuItem from '..';

describe('<DynamicMenuItem />', () => {
    it('should render when renderIf returns true', () => {
        const component = mount(<DynamicMenuItem renderIf={() => true} />);
        expect(component.find('MenuItem').exists()).toBe(true);
    });

    it('should not render when renderIf returns false', () => {
        const component = mount(<DynamicMenuItem renderIf={() => false} />);
        expect(component.find('MenuItem').exists()).toBe(false);
    });

    it('should render when renderIf prop receives an invalid value', () => {
        const component = mount(<DynamicMenuItem renderIf />);
        expect(component.find('MenuItem').exists()).toBe(true);
    });

    it('should render as disabled when disabled returns true', () => {
        const component = mount(<DynamicMenuItem disabled={() => true} />);
        expect(component.find('MenuItem').prop('disabled')).toBe(true);
    });

    it('should render as enabled when disabled returns false', () => {
        const component = mount(<DynamicMenuItem disabled={() => false} />);
        expect(component.find('MenuItem').prop('disabled')).toBe(false);
    });

    it('should render as enabled when disabled props receives an invalid value', () => {
        const component = mount(<DynamicMenuItem disabled />);
        expect(component.find('MenuItem').prop('disabled')).toBe(false);
    });

    it('should pass the item props to the MenuItem', () => {
        const onClick = jest.fn();
        const props = {
            className: 'test-class',
            style: {},
            label: 'Menu item',
            variant: 'header',
            icon: 'icon',
            iconPosition: 'right',
            title: 'title',
            onClick,
        };
        // eslint-disable-next-line react/jsx-props-no-spreading
        const component = mount(<DynamicMenuItem {...props} />);
        expect(component.find('MenuItem').props()).toEqual({ ...props, disabled: false });
    });
});
