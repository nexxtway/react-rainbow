import React from 'react';
import { mount } from 'enzyme';
import RadioGroup from '../index';

describe('<RadioGroup />', () => {
    it('renders correctly in vertical orientation (default)', () => {
        const options = [{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }];

        const component = mount(<RadioGroup options={options} />);
        const elem = component.find('RadioGroupStyledContentContainer');

        expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe(
            'column',
        );
    });

    it('renders correctly in vertical orientation (implicit)', () => {
        const options = [{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }];

        const component = mount(<RadioGroup options={options} orientation="vertical" />);
        const elem = component.find('RadioGroupStyledContentContainer');

        expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe(
            'column',
        );
    });

    it('renders correctly in horizontal orientation (implicit)', () => {
        const options = [{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }];

        const component = mount(<RadioGroup options={options} orientation="horizontal" />);
        const elem = component.find('RadioGroupStyledContentContainer');

        expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('row');
    });
});
