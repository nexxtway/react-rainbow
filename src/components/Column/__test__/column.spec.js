import React from 'react';
import { mount } from 'enzyme';
import Column from '../';

describe('<Column />', () => {
    it('should return a div element', () => {
        const component = mount(<Column />);
        expect(component.find('div').exists()).toBe(true);
    });
});
