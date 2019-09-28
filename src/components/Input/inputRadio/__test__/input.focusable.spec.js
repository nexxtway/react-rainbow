import React from 'react';
import { mount } from 'enzyme';
import InputRadio from '../';

describe('<InputRadio/>', () => {
    it('should be focusable', () => {
        const component = mount(<InputRadio label="Input Label" />);
        expect(component).toBeFocusable();
    });
});
