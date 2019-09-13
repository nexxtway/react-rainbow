import React from 'react';
import { mount } from 'enzyme';
import TimePicker from '../';

describe('<TimePicker/>', () => {
    it('should be focusable', () => {
        const component = mount(<TimePicker label="TimePicker Label" />);
        expect(component).toBeFocusable();
    });
});
