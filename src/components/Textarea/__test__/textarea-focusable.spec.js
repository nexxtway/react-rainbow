import React from 'react';
import { mount } from 'enzyme';
import Textarea from '../index';

describe('<Textarea />', () => {
    it('should be focusble', () => {
        const component = mount(<Textarea />);
        expect(component).toBeFocusable();
    });
});
