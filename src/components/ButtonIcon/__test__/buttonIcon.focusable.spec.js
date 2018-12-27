import React from 'react';
import { mount } from 'enzyme';
import ButtonIcon from '../index';

describe('<ButtonIcon />', () => {
    it('should be focusable', () => {
        const component = mount(<ButtonIcon />);
        expect(component).toBeFocusable();
    });
});
