import React from 'react';
import { mount } from 'enzyme';
import getChips from '../getChips';
import { StyledChip } from '../../styled';

describe('getChips', () => {
    test('should return null when value is falsey', () => {
        [null, undefined, false].forEach(value => {
            expect(getChips(value)).toBe(null);
        });
    });

    test('should return the correct amount of chips', () => {
        const value = [
            {
                label: 'First',
                name: 'first',
            },
            {
                label: 'Second',
                name: 'second',
            },
        ];
        const chips = getChips(value);
        const wrapper = mount(<div>{chips}</div>);
        expect(wrapper.find(StyledChip).length).toBe(2);
    });

    test('should return only one chip', () => {
        const value = {
            label: 'First',
            name: 'first',
        };
        const chip = getChips(value);
        const wrapper = mount(<div>{chip}</div>);
        expect(wrapper.find(StyledChip).length).toBe(1);
    });
});
