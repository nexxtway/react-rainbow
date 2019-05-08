import React from 'react';
import { mount } from 'enzyme';
import Lookup from './../';

describe('<Lookup/>', () => {
    it('should be focusable', () => {
        const component = mount(<Lookup label="Lookup Label" />);
        expect(component).toBeFocusable();
    });
});
