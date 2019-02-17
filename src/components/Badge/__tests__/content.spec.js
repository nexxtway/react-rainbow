import React from 'react';
import { mount } from 'enzyme';
import Content from './../content';

describe('<Content/>', () => {
    it('should return the label when there are not children', () => {
        const component = mount(
            <Content label="Label in Content" />,
        );
        expect(component.find('span').text()).toBe('Label in Content');
    });
    it('should return the label when children is null', () => {
        const component = mount(
            <Content label="Label in Content">
                {null}
            </Content>,
        );
        expect(component.find('span').text()).toBe('Label in Content');
    });
    it('should return the label when children is undefined', () => {
        const component = mount(
            <Content label="Label in Content">
                {undefined}
            </Content>,
        );
        expect(component.find('span').text()).toBe('Label in Content');
    });
    it('should return children when label and children are passed', () => {
        const component = mount(
            <Content label="Label in Content">
                Children in Content
            </Content>,
        );
        expect(component.find('span').text()).toBe('Children in Content');
    });
    it('should return children when label is not passed', () => {
        const component = mount(
            <Content>
                Children in Content
            </Content>,
        );
        expect(component.find('span').text()).toBe('Children in Content');
    });
    it('should have the right class names when children is passed and have a custom class', () => {
        const component = mount(
            <Content className="my-custom-class-name-in-badge-when-children">
                Children in Content
            </Content>,
        );
        expect(component.find('span').prop('className')).toBe('my-custom-class-name-in-badge-when-children');
    });
    it('should have the right class names when label is passed and have a custom class', () => {
        const component = mount(
            <Content className="my-custom-class-name-in-badge-when-label" label="Label in Content" />,
        );
        expect(component.find('span').prop('className')).toBe('my-custom-class-name-in-badge-when-label');
    });
});
