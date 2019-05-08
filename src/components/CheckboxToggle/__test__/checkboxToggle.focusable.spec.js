import React from 'react';
import { mount } from 'enzyme';
import CheckboxToggle from './../';

describe('<CheckboxToggle/>', () => {
    it('should be focusable', () => {
        const component = mount(<CheckboxToggle label="Toggle label" />);
        expect(component).toBeFocusable();
    });
});
