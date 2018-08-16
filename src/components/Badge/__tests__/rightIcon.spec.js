import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RightIcon from './../rightIcon';

describe('<RightIcon in the Badge component/>', () => {
    it('should not have children when the iconName is not passed', () => {
        const component = mount(
            <RightIcon />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should not have children when the position is not passed', () => {
        const component = mount(
            <RightIcon iconName="utility:world" />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should not have children when the position is other than right', () => {
        const component = mount(
            <RightIcon iconName="utility:world" position="left" />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should not have margin left when the label is not passed', () => {
        const component = renderer.create(
           <RightIcon iconName="utility:world" position="right" />,
       );
        expect(component).toMatchSnapshot();
    });
    it('should have margin left when the label is passed', () => {
        const component = renderer.create(
           <RightIcon label="testing RightIcon" iconName="utility:world" position="right" />,
       );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when the iconName is passed and position is right', () => {
        const component = renderer.create(
           <RightIcon iconName="utility:world" position="right" />,
       );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when the position is left and iconName and label is passed', () => {
        const component = renderer.create(
           <RightIcon label="testing RightIcon" iconName="utility:world" position="right" />,
       );
        expect(component).toMatchSnapshot();
    });
});
