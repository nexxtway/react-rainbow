import React from 'react';
import { mount } from 'enzyme';
import Chips from '../chips';
import { StyledChip } from '../styled';

describe('<Chips />', () => {
    it('should not render any chip', () => {
        const component = mount(<Chips />);
        expect(component.find(StyledChip).length).toBe(0);
    });

    it('should render only one chip', () => {
        const value = { label: 'Test', name: 'test' };
        const component = mount(<Chips value={value} />);
        expect(component.find(StyledChip).length).toBe(1);
    });

    it('should render the right amount of chips', () => {
        const value = [
            {
                label: 'Option 1',
                name: 'option-1',
            },
            {
                label: 'Option 2',
                name: 'option-2',
            },
            {
                label: 'Option 3',
                name: 'option-3',
            },
        ];
        const component = mount(<Chips value={value} />);
        expect(component.find(StyledChip).length).toBe(3);
    });
});
