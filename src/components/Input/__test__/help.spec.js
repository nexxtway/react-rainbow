import React from 'react';
import { mount } from 'enzyme';
import Help from './../help';

describe('<InputHelp/>', () => {
    it('should not render the help text when it is not passed', () => {
        const component = mount(
            <Help />,
        );
        expect(component.find('div[className="rainbow-form-element__help rainbow-color__text_gray-11"]').exists()).toBe(false);
    });
    it('should render the help text passed', () => {
        const component = mount(
            <Help text="Help text" />,
        );
        const help = component.find('div[className="rainbow-form-element__help rainbow-color__text_gray-11"]');
        expect(help.exists()).toBe(true);
        expect(help.text()).toBe('Help text');
    });
});
