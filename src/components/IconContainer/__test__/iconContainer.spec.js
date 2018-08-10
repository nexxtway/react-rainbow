import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import iconContainer from './../index';

const svgIcon = props => <svg {...props} />;
const Icon = iconContainer(svgIcon);

describe('iconContainer HOC', () => {
    it('should set the title passed', () => {
        const component = mount(
            <Icon title="icon title" />,
        );
        expect(component.find('.slds-icon_container').prop('title')).toBe('icon title');
    });
    it('should not render the assistive text when is not passed', () => {
        const component = mount(
            <Icon />,
        );
        expect(component.find('.slds-assistive-text').length).toBe(0);
    });
    it('should render the assistive text passed', () => {
        const component = mount(
            <Icon assistiveText="for screen readers" />,
        );
        expect(component.find('.slds-assistive-text').text()).toBe('for screen readers');
    });
    it('should have the right class names when ehiter the variant and size are not passed', () => {
        const component = renderer.create(
            <Icon />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when a custom container class name is passed', () => {
        const component = renderer.create(
            <Icon containerClassName="custom-container-classname" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is xx-small', () => {
        const component = renderer.create(
            <Icon size="xx-small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is x-small', () => {
        const component = renderer.create(
            <Icon size="x-small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is small', () => {
        const component = renderer.create(
            <Icon size="small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is medium', () => {
        const component = renderer.create(
            <Icon size="medium" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is large', () => {
        const component = renderer.create(
            <Icon size="large" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is default', () => {
        const component = renderer.create(
            <Icon variant="default" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is warning', () => {
        const component = renderer.create(
            <Icon variant="warning" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is error', () => {
        const component = renderer.create(
            <Icon variant="error" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is light', () => {
        const component = renderer.create(
            <Icon variant="light" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when a custom className is passed', () => {
        const component = renderer.create(
            <Icon className="custom-classname" />,
        );
        expect(component).toMatchSnapshot();
    });
});
