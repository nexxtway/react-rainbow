import React from 'react';
import { mount } from 'enzyme';
import OptionItems from '../optionItems';

const options = [
    { value: 'option 1', label: 'option 1' },
    { value: 'option 2', label: 'option 2' },
    { value: 'option 3', label: 'option 3' },
];

describe('<OptionItems />', () => {
    it('should return the right amount of option items', () => {
        const component = mount(<OptionItems options={options} />);

        expect(component.children().length).toBe(3);
    });
});
