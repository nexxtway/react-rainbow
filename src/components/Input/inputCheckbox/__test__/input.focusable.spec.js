import React from 'react';
import { mount } from 'enzyme';
import InputCheckbox from '../';

describe('<InputCheckbox/>', () => {
    it('should be focusable', () => {
        const component = mount(<InputCheckbox label="Input Label" />);
        expect(component).toBeFocusable();
    });
});
