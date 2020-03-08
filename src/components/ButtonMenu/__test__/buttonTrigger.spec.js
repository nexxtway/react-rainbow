import React from 'react';
import { mount } from 'enzyme';
import ButtonTrigger from '../buttonTrigger';

describe('<ButtonTrigger/>', () => {
    it('should render a Button with label only when no icon is passed', () => {
        const component = mount(<ButtonTrigger label="Menu" />);
        expect(component.render().html()).toBe('Menu');
    });
    it('should render a Button with label and left icon when iconPosition value is different from "right"', () => {
        const component = mount(<ButtonTrigger icon={<svg />} label="Menu" />);
        expect(component.render().html()).toBe('<svg/>Menu');
    });
    it('should render a Button with label and right icon when iconPosition value is "right"', () => {
        const component = mount(<ButtonTrigger icon={<svg />} iconPosition="right" label="Menu" />);
        expect(component.render().html()).toBe('Menu<svg/>');
    });
});
