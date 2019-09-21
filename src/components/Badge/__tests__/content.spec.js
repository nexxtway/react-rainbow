import React from 'react';
import { mount } from 'enzyme';
import Content from './../content';

describe('<Content/>', () => {
    it('should return the label when there are not children', () => {
        const component = mount(<Content label="Label in Content" />);
        expect(component.find('span').text()).toBe('Label in Content');
    });
    it('should return the label when children is a falsy value other than zero', () => {
        const falsyValues = [false, null, undefined, NaN, ''];
        falsyValues.forEach(falsyValue => {
            const component = mount(<Content label="Label in Content">{falsyValue}</Content>);
            expect(component.find('span').text()).toBe('Label in Content');
        });
    });
    it('should return the 0 when children is 0', () => {
        const zero = 0;
        const component = mount(<Content label="Label in Content">{zero}</Content>);
        expect(component.find('span').text()).toBe('0');
    });
    it('should return children when label and children are passed', () => {
        const component = mount(<Content label="Label in Content">Children in Content</Content>);
        expect(component.find('span').text()).toBe('Children in Content');
    });
    it('should return children when label is not passed', () => {
        const component = mount(<Content>Children in Content</Content>);
        expect(component.find('span').text()).toBe('Children in Content');
    });
});
