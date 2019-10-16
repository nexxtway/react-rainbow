import React from 'react';
import { mount } from 'enzyme';
import DatePicker from '..';

describe('<DatePicker/>', () => {
    it('should be focusable', () => {
        const component = mount(<DatePicker label="DatePicker Label" />);
        expect(component).toBeFocusable();
    });
});
