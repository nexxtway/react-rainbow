import React from 'react';
import { mount } from 'enzyme';
import AccordionSection from '..';

describe('<AccordionSection/>', () => {
    it('should have type button on section summary', () => {
        const component = mount(<AccordionSection label="Test section" />);
        expect(component.find('button').prop('type')).toBe('button');
    });
});
