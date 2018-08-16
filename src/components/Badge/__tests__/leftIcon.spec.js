import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import LeftIcon from './../leftIcon';

describe('<LeftIcon/> in the Badge component', () => {
    it('should not have children when the iconName is not passed', () => {
        const component = mount(
            <LeftIcon position="left" />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should not have children when the position is other than left', () => {
        const component = mount(
            <LeftIcon iconName="utility:world" position="right" />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should have the right class names when the label is not passed', () => {
        const component = renderer.create(
           <LeftIcon iconName="utility:world" position="left" />,
       );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when the label is passed', () => {
        const component = renderer.create(
           <LeftIcon label="testing LeftIcon" iconName="utility:world" position="left" />,
       );
        expect(component).toMatchSnapshot();
    });
});
