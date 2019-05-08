import React from 'react';
import { mount } from 'enzyme';
import Description from '../description';

describe('<VerticalSectionOverflowDescription/>', () => {
    it('should set the right classNames when isExpanded is true', () => {
        const component = mount(<Description isExpanded description="test" />);
        expect(component.find('span').prop('className')).toBe(
            'rainbow-vertical-section-overflow_action-description rainbow-vertical-section-overflow_action-description--expanded',
        );
    });
    it('should set the right classNames when isExpanded is false', () => {
        const component = mount(<Description description="test" />);
        expect(component.find('span').prop('className')).toBe(
            'rainbow-vertical-section-overflow_action-description',
        );
    });
});
