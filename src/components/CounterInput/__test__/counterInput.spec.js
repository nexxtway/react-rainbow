import React from 'react';
import { mount } from 'enzyme';
import CounterInput from '../';

describe('<CounterInput />', () => {
    it('should mount a input type number', () => {
        const component = mount(<CounterInput />);
        const input = component.find('input');
        console.log(input.html());
    });
});
