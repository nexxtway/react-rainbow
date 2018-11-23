import React from 'react';
import { mount } from 'enzyme';
import Select from '../index';

describe('<Select />', () => {
    it('should be focusable', () => {
        const component = mount(<Select />);
        expect(component).toBeFocusable();
    });
});
