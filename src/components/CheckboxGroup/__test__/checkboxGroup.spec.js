import React from 'react';
import { mount } from 'enzyme';
import CheckboxGroup from '../index';

const options = [
    { value: 'admin', label: 'Admin', disabled: false },
    { value: 'user', label: 'User', disabled: false },
    { value: 'nobody', label: 'Anonymus', disabled: true },
];

describe('<CheckboxGroup />', () => {
    it('should set the right classNames when error is passed', () => {
        const component = mount(<CheckboxGroup options={options} error />);

        expect(component.find('fieldset.rainbow-checkbox-group-container.rainbow-checkbox-group-has-error').exists()).toBe(true);
    });

    it('should set the right classNames when custom classes are passed', () => {
        const component = mount(<CheckboxGroup options={options} className="custom-class-name" />);

        expect(component.find('fieldset.rainbow-checkbox-group-container.custom-class-name').exists()).toBe(true);
    });

    it('should render the label when label is passed', () => {
        const component = mount(<CheckboxGroup options={options} label="label" />);

        expect(component.find('legend.rainbow-checkbox-group-label').exists()).toBe(true);
    });

    it('should render the RequiredAsterisk component when required is passed', () => {
        const component = mount(<CheckboxGroup options={options} label="label" required />);

        expect(component.find('RequiredAsterisk').exists()).toBe(true);
    });

    it('should render the error when error is passed', () => {
        const component = mount(<CheckboxGroup options={options} label="label" error="this field is required" />);

        expect(component.find('div.rainbow-checkbox-group-error').exists()).toBe(true);
    });

    it('should render the amount of children passed as options ', () => {
        const component = mount(<CheckboxGroup options={options} />);
        const checkboxContainer = component.find('div.rainbow-checkbox');

        expect(checkboxContainer.length).toBe(3);
    });
});
