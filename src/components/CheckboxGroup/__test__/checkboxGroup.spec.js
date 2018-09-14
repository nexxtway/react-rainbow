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

        expect(component.find('fieldset.rainbow-checkbox-group_container.rainbow-checkbox-group--error').exists()).toBe(true);
    });

    it('should set the right classNames when custom classes are passed', () => {
        const component = mount(<CheckboxGroup options={options} className="custom-class-name" />);

        expect(component.find('fieldset.rainbow-checkbox-group_container.custom-class-name').exists()).toBe(true);
    });
});
