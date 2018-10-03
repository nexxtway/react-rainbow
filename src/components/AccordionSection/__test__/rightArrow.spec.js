import React from 'react';
import { mount } from 'enzyme';
import RightArrow from '../rightArrow';

describe('<AccordionItems RightArrow />', () => {
    it('should set the right className when isExpanded is not passed', () => {
        const component = mount(<RightArrow />);

        expect(component.find('svg.rainbow-accordion_right-icon').exists()).toBe(true);
    });
    it('should set the right className when isExpanded is passed', () => {
        const component = mount(<RightArrow isExpanded />);

        expect(component.find('svg.rainbow-accordion_right-icon--expanded').exists()).toBe(true);
    });
    it('should set the right className when disabled is not passed', () => {
        const component = mount(<RightArrow />);

        expect(component.find('path.rainbow-accordion_right-icon-color').exists()).toBe(true);
    });
    it('should set the right className when disabled is passed', () => {
        const component = mount(<RightArrow disabled />);

        expect(component.find('path.rainbow-accordion_right-icon-color--disabled').exists()).toBe(true);
    });
});
