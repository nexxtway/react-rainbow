import React from 'react';
import { mount } from 'enzyme';
import Spinner from './../index';

describe('<Spinner/>', () => {
    it('should not render the spinner when isVisible is false', () => {
        const component = mount(<Spinner isVisible={false} />);
        expect(component.children().length).toBe(0);
    });
    it('should not render the spinner when isVisible is true', () => {
        const component = mount(<Spinner isVisible />);
        expect(component.children().length).toBe(1);
    });
    it('should pass assistiveText to the prop text of AssistiveText component', () => {
        const component = mount(<Spinner assistiveText="for screen readers" />);
        expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
    });
});
