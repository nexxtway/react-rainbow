import React from 'react';
import { mount } from 'enzyme';
import Help from './../help';

describe('<Help/> in the Input component', () => {
    it('should not render a div element when text is null', () => {
        const component = mount(
            <Help text={null} />,
        );
        expect(component.find('div').exists()).toBe(false);
    });
    it('should render a div element when text is not null', () => {
        const component = mount(
            <Help text="Help text" />,
        );
        expect(component.find('div').exists()).toBe(true);
    });
});
