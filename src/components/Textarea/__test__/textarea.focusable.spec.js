import React from 'react';
import { mount } from 'enzyme';
import Textarea from './../';

describe('<Textarea/>', () => {
    it('should be focusable', () => {
        const component = mount(<Textarea label="Textarea Label" />);
        expect(component).toBeFocusable();
    });
});
