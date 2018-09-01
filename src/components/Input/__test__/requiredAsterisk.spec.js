import React from 'react';
import { mount } from 'enzyme';
import RequiredAsterisk from './../requiredAsterisk';

describe('<InputRequiredAsterisk/>', () => {
    it('should not render the abbr element when is not required', () => {
        const component = mount(
            <RequiredAsterisk required={false} />,
        );
        expect(component.find('abbr[className="rainbow-required"]').exists()).toBe(false);
    });
    it('should render the abbr element when is required', () => {
        const component = mount(
            <RequiredAsterisk required />,
        );
        const asterisk = component.find('abbr[className="rainbow-required"]');
        expect(asterisk.exists()).toBe(true);
        expect(asterisk.text()).toBe('* ');
    });
    it('should set the title prop as required in the abbr element when is required', () => {
        const component = mount(
            <RequiredAsterisk required />,
        );
        const asterisk = component.find('abbr[className="rainbow-required"]');
        expect(asterisk.prop('title')).toBe('required');
    });
});
