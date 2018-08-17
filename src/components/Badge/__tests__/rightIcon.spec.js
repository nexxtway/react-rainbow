import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RightIcon from './../rightIcon';

describe('<RightIcon in the Badge component/>', () => {
    it('should not have children when the iconName is not passed', () => {
        const component = mount(
            <RightIcon position="right" />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should not have children when the position is other than right', () => {
        const component = mount(
            <RightIcon iconName="utility:world" position="left" />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should have the right class names when the label is not passed', () => {
        const component = renderer.create(
           <RightIcon iconName="utility:world" position="right" />,
       );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when the label is passed', () => {
        const component = renderer.create(
           <RightIcon label="testing RightIcon" iconName="utility:world" position="right" />,
       );
        expect(component).toMatchSnapshot();
    });
});
