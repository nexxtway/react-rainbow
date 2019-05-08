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

        expect(
            component
                .find('fieldset.rainbow-checkbox-group_container.rainbow-checkbox-group--error')
                .exists(),
        ).toBe(true);
    });

    it('should set the right classNames when custom classes are passed', () => {
        const component = mount(<CheckboxGroup options={options} className="custom-class-name" />);

        expect(
            component.find('fieldset.rainbow-checkbox-group_container.custom-class-name').exists(),
        ).toBe(true);
    });

    it('should set an empty array when the values passed is a "string"', () => {
        const component = mount(<CheckboxGroup value="admin" className="custom-class-name" />);

        const checkbox = component.find('CheckboxList');
        expect(checkbox.prop('values')).toEqual([]);
    });

    it('should set the right values when the values passed is not a "string"', () => {
        const component = mount(
            <CheckboxGroup value={['admin', 'user-1']} className="custom-class-name" />,
        );

        const checkbox = component.find('CheckboxList');
        expect(checkbox.prop('values')).toEqual(['admin', 'user-1']);
    });
});
