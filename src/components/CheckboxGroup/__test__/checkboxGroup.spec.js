import React from 'react';
import { mount } from 'enzyme';
import CheckboxGroup from '../index';

describe('<CheckboxGroup />', () => {
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
