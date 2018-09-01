import React from 'react';
import { mount } from 'enzyme';
import Avatar from './../index';

describe('<Avatar/>', () => {
    it('should pass assistiveText to the prop text of AssistiveText component', () => {
        const component = mount(
            <Avatar initials="JD" assistiveText="for screen readers" />,
        );
        expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
    });
    it('should have the right class names when props are not passed', () => {
        const component = mount(
            <Avatar />,
        );
        expect(component.find('span').prop('className')).toBe('rainbow-avatar rainbow-avatar_medium');
    });
    it('should have the right class names when size is small', () => {
        const component = mount(
            <Avatar size="small" />,
        );
        expect(component.find('span').prop('className')).toBe('rainbow-avatar rainbow-avatar_small');
    });
    it('should have the right class names when size is x-small', () => {
        const component = mount(
            <Avatar size="x-small" />,
        );
        expect(component.find('span').prop('className')).toBe('rainbow-avatar rainbow-avatar_x-small');
    });
    it('should have the right class names when size is medium', () => {
        const component = mount(
            <Avatar size="medium" />,
        );
        expect(component.find('span').prop('className')).toBe('rainbow-avatar rainbow-avatar_medium');
    });
    it('should have the right class names when size is large', () => {
        const component = mount(
            <Avatar size="large" />,
        );
        expect(component.find('span').prop('className')).toBe('rainbow-avatar rainbow-avatar_large');
    });
});
