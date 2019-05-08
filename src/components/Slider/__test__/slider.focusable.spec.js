import React from 'react';
import { mount } from 'enzyme';
import Slider from './../';

describe('<Slider/>', () => {
    it('should be focusable', () => {
        const component = mount(<Slider label="Slider Label" />);
        expect(component).toBeFocusable();
    });
});
