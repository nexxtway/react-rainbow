import React from 'react';
import { mount } from 'enzyme';
import Input from '../';

describe('<PickerInput/>', () => {
    it('should be focusable', () => {
        const component = mount(<Input label="Input Label" />);
        expect(component).toBeFocusable();
    });
});
