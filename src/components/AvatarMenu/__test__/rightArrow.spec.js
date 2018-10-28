import React from 'react';
import { mount } from 'enzyme';
import RightArrow from '../rightArrow';

describe('<RightArrow in AvatarMenu />', () => {
    it('should set the right className when isOpen is not passed', () => {
        const component = mount(<RightArrow />);

        expect(component.find('svg.rainbow-avatar-menu_right-arrow_icon').exists()).toBe(true);
    });
    it('should set the right className when isOpen is passed', () => {
        const component = mount(<RightArrow isOpen />);

        expect(component.find('svg.rainbow-avatar-menu_right-arrow_icon.rainbow-avatar-menu_right-arrow_icon--open').exists()).toBe(true);
    });
});
