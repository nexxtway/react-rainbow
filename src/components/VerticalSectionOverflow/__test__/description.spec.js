import React from 'react';
import { mount } from 'enzyme';
import Description from '../description';

describe('<VerticalSectionOverflowDescription/>', () => {
    it('should return null when isExpanded is true', () => {
        const component = mount(<Description isExpanded description="test" />);
        expect(component.text()).toBe(null);
    });
    it('should return the description label when isExpanded is false', () => {
        const component = mount(<Description description="test" />);
        expect(component.find('span.rainbow-nav-vertical__action-description').exists()).toBe(true);
    });
});
