import React from 'react';
import { mount } from 'enzyme';
import Avatar from './../index';

describe('<Avatar/>', () => {
    it('should pass assistiveText to the prop text of AssistiveText component', () => {
        const component = mount(<Avatar initials="JD" assistiveText="for screen readers" />);
        expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
    });
    it('should have the right class names when props are not passed', () => {
        const component = mount(<Avatar />);
        expect(component.find('span[className="rainbow-avatar"]').exists()).toBe(true);
    });
});
