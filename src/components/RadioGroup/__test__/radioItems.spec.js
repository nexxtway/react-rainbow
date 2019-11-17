import React from 'react';
import { mount } from 'enzyme';
import RadioItems from '../radioItems';

describe('<RadioItems />', () => {
    it('should return the 3 radios when 3 options are passed', () => {
        const options = [
            { value: 'admin', label: 'Admin', disabled: true },
            { value: 'user', label: 'User' },
            { value: 'anonymous', label: 'Anonymous' },
        ];
        const component = mount(<RadioItems options={options} />);
        expect(component.children().length).toBe(3);
    });
    it('should pass the right props to the Radio component', () => {
        const option = [{ value: 'admin', label: 'Admin', disabled: true }];
        const component = mount(
            <RadioItems
                options={option}
                name="name-1"
                ariaDescribedby="error-1"
                onChange={() => {}}
            />,
        );
        expect(component.find('Radio').props()).toEqual(
            expect.objectContaining({
                value: option[0].value,
                label: option[0].label,
                disabled: option[0].disabled,
                ariaDescribedby: 'error-1',
                name: 'name-1',
                onChange: expect.any(Function),
                checked: false,
                error: null,
            }),
        );
    });
});
