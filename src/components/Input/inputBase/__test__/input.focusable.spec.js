import React from 'react';
import { mount } from 'enzyme';
import InputBase from '../';

describe('<InputBase/>', () => {
    it('should be focusable', () => {
        const component = mount(<InputBase label="Input Label" />);
        expect(component).toBeFocusable();
    });
});
