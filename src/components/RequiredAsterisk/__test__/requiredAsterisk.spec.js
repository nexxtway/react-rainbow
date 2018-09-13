import React from 'react';
import { mount } from 'enzyme';
import RequiredAsterisk from './../index';

describe('<InputRequiredAsterisk/>', () => {
    it('should set the title prop as required in the abbr element when is required', () => {
        const component = mount(
            <RequiredAsterisk required />,
        );
        const asterisk = component.find('abbr[className="rainbow-required"]');
        expect(asterisk.prop('title')).toBe('required');
    });
});
