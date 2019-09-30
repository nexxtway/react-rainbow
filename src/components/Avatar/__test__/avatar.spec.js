import React from 'react';
import { mount } from 'enzyme';
import Avatar from './../index';

describe('<Avatar/>', () => {
    it('should pass assistiveText to the prop text of AssistiveText component', () => {
        const component = mount(<Avatar initials="JD" assistiveText="for screen readers" />);
        expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
    });
});
