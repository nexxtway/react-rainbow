import React from 'react';
import { mount } from 'enzyme';
import MenuDivider from './../';

describe('<MenuDivider />', () => {
    it('should set the prop role as separator in li element', () => {
        const component = mount(<MenuDivider />);
        expect(component.find('li').prop('role')).toBe('separator');
    });
});
