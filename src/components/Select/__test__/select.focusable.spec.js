import React from 'react';
import { mount } from 'enzyme';
import Select from './../';

describe('<Select/>', () => {
    it('should be focusable', () => {
        const component = mount(<Select label="Select Label" />);
        expect(component).toBeFocusable();
    });
});
