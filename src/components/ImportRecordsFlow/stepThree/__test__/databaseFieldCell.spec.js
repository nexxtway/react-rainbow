import React from 'react';
import { mount } from 'enzyme';
import DatabaseFieldCell from '../databaseFieldCell';

describe('<DatabaseFieldCell />', () => {
    it('should show a required ui element when field is required', () => {
        const props = {
            value: 'name',
            row: {
                required: true,
            },
        };
        const component = mount(<DatabaseFieldCell {...props} />);
        expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
    });
    it('should render text value properly', () => {
        const props = {
            value: 'name',
            row: {
                required: false,
            },
        };
        const component = mount(<DatabaseFieldCell {...props} />);
        expect(component.text()).toBe(props.value);
    });
});
