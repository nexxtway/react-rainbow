import React from 'react';
import { mount } from 'enzyme';
import AssistiveText from './../index';

describe('<AssistiveText/>', () => {
    it('should not render the text when is not passed', () => {
        const component = mount(
            <AssistiveText />,
        );
        expect(component.find('.slds-assistive-text').length).toBe(0);
    });
    it('should render the text passed', () => {
        const component = mount(
            <AssistiveText text="for screen readers" />,
        );
        expect(component.find('.slds-assistive-text').text()).toBe('for screen readers');
    });
});
