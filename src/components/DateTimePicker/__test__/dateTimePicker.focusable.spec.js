import React from 'react';
import { mount } from 'enzyme';
import DateTimePicker from '../';

describe('<DateTimePicker/>', () => {
    it('should be focusable', () => {
        const component = mount(<DateTimePicker label="DateTimePicker Label" />);
        expect(component).toBeFocusable();
    });
});
