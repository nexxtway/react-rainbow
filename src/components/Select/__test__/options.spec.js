import React from 'react';
import { mount } from 'enzyme';
import Options from './../options';

const options = [
    { value: 'option 1', label: 'option 1' },
    { value: 'option 2', label: 'option 2' },
    { value: 'option 3', label: 'option 3' },
];

describe('<SelectOptions />', () => {
    it('should return the right amount of option items', () => {
        const component = mount(<Options options={options} />);

        expect(component.children().length).toBe(3);
    });
    it('should pass the right props to option element', () => {
        const singleOption = [{ value: 'option-1', label: 'option 1', disabled: false }];
        const component = mount(<Options options={singleOption} />);

        expect(component.find('option').props()).toEqual({
            children: 'option 1',
            disabled: false,
            value: 'option-1',
        });
    });
});
