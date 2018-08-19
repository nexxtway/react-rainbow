import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Avatar from './../index';

describe('<Avatar/>', () => {
    it('should pass assistiveText to the prop text of AssistiveText component', () => {
        const component = mount(
            <Avatar initials="JD" assistiveText="for screen readers" />,
        );
        expect(component.find('AssistiveText').prop('text')).toBe('for screen readers');
    });
    it('should have the right class names', () => {
        const component = renderer.create(
            <Avatar />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is circle and size is x-small', () => {
        const component = renderer.create(
            <Avatar variant="circle" size="x-small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is small', () => {
        const component = renderer.create(
            <Avatar size="small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is medium', () => {
        const component = renderer.create(
            <Avatar size="medium" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is large', () => {
        const component = renderer.create(
            <Avatar size="large" />,
        );
        expect(component).toMatchSnapshot();
    });
});
