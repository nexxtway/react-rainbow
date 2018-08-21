import React from 'react';
import { mount } from 'enzyme';
import Error from './../error';

describe('<InputError/>', () => {
    it('should not render the error when it is not passed', () => {
        const component = mount(
            <Error />,
        );
        expect(component.find('div[className="slds-form-element__help"]').exists()).toBe(false);
    });
    it('should render the error passed', () => {
        const component = mount(
            <Error error="Error text" />,
        );
        const error = component.find('div[className="slds-form-element__help"]');
        expect(error.exists()).toBe(true);
        expect(error.text()).toBe('Error text');
    });
    it('should set the id passed as the id prop in the error container element', () => {
        const component = mount(
            <Error error="Error text" id="error-message-125" />,
        );
        const error = component.find('div[className="slds-form-element__help"]');
        expect(error.prop('id')).toBe('error-message-125');
    });
});
