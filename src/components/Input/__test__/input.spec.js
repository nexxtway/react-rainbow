import React from 'react';
import { mount } from 'enzyme';
import Input from './../';

describe('<Input/>', () => {
    it('should return the InputRadio component when type radio is passed', () => {
        const component = mount(<Input type="radio" />);
        expect(component.find('InputRadio').exists()).toBe(true);
    });
    it('should return the InputCheckbox component when type checkbox is passed', () => {
        const component = mount(<Input type="checkbox" />);
        expect(component.find('InputCheckbox').exists()).toBe(true);
    });
    it('should return the InputBase component when type radio or checkbox are not passed', () => {
        const component = mount(<Input />);
        expect(component.find('InputBase').exists()).toBe(true);
    });
});
