import React from 'react';
import { mount } from 'enzyme';
import RequiredAsterisk from './../requiredAsterisk';

describe('<Help/> in the Input component', () => {
    it('should not render an abbr element when is not required', () => {
        const component = mount(
            <RequiredAsterisk required={false} />,
        );
        expect(component.find('abbr').exists()).toBe(false);
    });
    it('should render an abbr element when is required', () => {
        const component = mount(
            <RequiredAsterisk required />,
        );
        expect(component.find('abbr').exists()).toBe(true);
    });
});
