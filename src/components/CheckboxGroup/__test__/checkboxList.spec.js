import React from 'react';
import { mount } from 'enzyme';
import CheckboxList from '../checkboxList';
import StyledItemDescription from '../../RadioGroup/styled/itemDescription';

const options = [
    { value: 'admin', label: 'Admin', disabled: false, description: 'Admin user' },
    { value: 'user', label: 'User', disabled: false, description: 'Regular user' },
    { value: 'nobody', label: 'Anonymus', disabled: true, description: 'Anonymous user' },
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

    it('should render the description', () => {
        const component = mount(<CheckboxList options={options} />);
        expect(component.find(StyledItemDescription).length).toBe(3);
        expect(
            component
                .find(StyledItemDescription)
                .first()
                .text(),
        ).toBe('Admin user');
    });
});
