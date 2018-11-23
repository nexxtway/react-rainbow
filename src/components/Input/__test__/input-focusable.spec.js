import React from 'react';
import { mount } from 'enzyme';
import Input from '../index';

describe('<Input />', () => {
    it('should be focusable', () => {
        const component = mount(<Input />);
        expect(component).toBeFocusable();
    });
});
