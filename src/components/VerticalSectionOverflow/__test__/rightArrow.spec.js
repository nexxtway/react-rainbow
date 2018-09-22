import React from 'react';
import { mount } from 'enzyme';
import RightArrow from '../rightArrow';

describe('<RightArrow />', () => {
    it('should set the right className when isExpanded is not passed', () => {
        const component = mount(<RightArrow />);

        expect(component.find('svg.rainbow-vertical-section-overflow_icon').exists()).toBe(true);
    });
    it('should set the right className when isExpanded is passed', () => {
        const component = mount(<RightArrow isExpanded />);

        expect(component.find('svg.rainbow-vertical-section-overflow_icon.rainbow-vertical-section-overflow-icon--expanded').exists()).toBe(true);
    });
});
