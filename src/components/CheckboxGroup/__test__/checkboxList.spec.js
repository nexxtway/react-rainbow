import React from 'react';
import { mount } from 'enzyme';
import CheckboxList from '../checkboxList';

const options = [
    { value: 'admin', label: 'Admin', disabled: false },
    { value: 'user', label: 'User', disabled: false },
    { value: 'nobody', label: 'Anonymus', disabled: true },
];

describe('<CheckboxList />', () => {
    it('should return the right amount of checkboxes ', () => {
        const component = mount(<CheckboxList options={options} />);
        expect(component.children().length).toBe(3);
    });

    it('should pass the right props to the Checkbox component', () => {
        const component = mount(
            <CheckboxList options={[{ value: 'admin', label: 'Admin', disabled: false }]} />,
        );
        const checkbox = component.find('Checkbox');
        expect(checkbox.prop('value')).toBe('admin');
        expect(checkbox.prop('label')).toBe('Admin');
        expect(checkbox.prop('disabled')).toBe(false);
    });
});
