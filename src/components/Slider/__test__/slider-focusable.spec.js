import React from 'react';
import { mount } from 'enzyme';
import Slider from '../index';

describe('<Slider />', () => {
    it('should be focusable', () => {
        const component = mount(<Slider />);
        expect(component).toBeFocusable();
    });
});
