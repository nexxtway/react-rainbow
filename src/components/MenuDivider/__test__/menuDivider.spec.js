import React from 'react';
import { mount } from 'enzyme';
import MenuDivider from './../';

describe('<MenuDivider />', () => {
    it('should set the prop role as separator in li element', () => {
        const component = mount(<MenuDivider />);
        expect(component.find('li').prop('role')).toBe('separator');
    });
    it('should set the right className to li element when variant default is passed', () => {
        const component = mount(<MenuDivider variant="default" />);
        expect(component.find('li').prop('className')).toBe('rainbow-divider');
    });
    it('should set the right className to li element when variant space is passed', () => {
        const component = mount(<MenuDivider variant="space" />);
        expect(component.find('li').prop('className')).toBe('rainbow-divider_space');
    });
});
