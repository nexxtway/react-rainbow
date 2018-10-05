import React from 'react';
import { mount } from 'enzyme';
import RightArrow from '../rightArrow';

describe('<AccordionItems RightArrow />', () => {
    it('should set the right className', () => {
        const component = mount(<RightArrow />);

        expect(component.find('svg.rainbow-accordion-section_right-icon').exists()).toBe(true);
    });
    it('should set the right className when isExpanded is passed', () => {
        const component = mount(<RightArrow isExpanded />);

        expect(component.find('svg.rainbow-accordion-section_right-icon--expanded').exists()).toBe(true);
    });
    it('should set the right className when disabled is passed', () => {
        const component = mount(<RightArrow disabled />);

        expect(component.find('svg.rainbow-accordion-section_right-icon-color--disabled').exists()).toBe(true);
    });
});
