import React from 'react';
import { mount } from 'enzyme';
import AssistiveText from './../index';

describe('<AssistiveText/>', () => {
    it('should render the text passed', () => {
        const component = mount(
            <AssistiveText text="for screen readers" />,
        );
        expect(component.find('.rainbow-assistive-text').text()).toBe('for screen readers');
    });
});
