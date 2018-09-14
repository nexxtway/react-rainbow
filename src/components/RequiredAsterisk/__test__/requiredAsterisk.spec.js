import React from 'react';
import { mount } from 'enzyme';
import RequiredAsterisk from './../index';

describe('<InputRequiredAsterisk/>', () => {
    it('should render the abbr element when is required', () => {
        const component = mount(
            <RequiredAsterisk required />,
        );
        expect(component.find('abbr').exists()).toBe(true);
    });
    it('should set the title prop as required in the abbr element when is required', () => {
        const component = mount(
            <RequiredAsterisk required />,
        );
        const asterisk = component.find('abbr[className="rainbow-required-asterisk"]');
        expect(asterisk.prop('title')).toBe('required');
    });
});
