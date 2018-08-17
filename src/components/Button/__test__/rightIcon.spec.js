import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RightIcon from './../rightIcon';

describe('<RightIcon in the Button component/>', () => {
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
    it('should have the right class names when the iconName is passed and position is right', () => {
        const component = renderer.create(
           <RightIcon iconName="utility:world" position="right" />,
       );
        expect(component).toMatchSnapshot();
    });
});
