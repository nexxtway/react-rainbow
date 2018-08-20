import React from 'react';
import { mount } from 'enzyme';
import Error from './../error';

describe('<Error/> in the Input component', () => {
    it('should not render a div element when error is null', () => {
        const component = mount(
            <Error error={null} />,
        );
        expect(component.find('div').exists()).toBe(false);
    });
    it('should render a div element when error is not null', () => {
        const component = mount(
            <Error error="Error text" />,
        );
        expect(component.find('div').exists()).toBe(true);
    });
});
