import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Icon from './../index';

describe('<Icon/>', () => {
    it('should set the title passed to the container element', () => {
        const component = mount(
            <Icon iconName="custom:custom5" title="icon title" />,
        );
        expect(component.find('.slds-icon_container').prop('title')).toBe('icon title');
    });
    it('should set the assistiveText passed as the text prop in AssistiveText component', () => {
        const component = mount(
            <Icon iconName="custom:custom5" assistiveText="assitive description" />,
        );
        expect(component.find('AssistiveText').prop('text')).toBe('assitive description');
    });
    it('should have the right class names when size and variant are not passed', () => {
        const component = renderer.create(
            <Icon iconName="custom:custom5" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when custom className and svgClassName are passed', () => {
        const component = renderer.create(
            <Icon iconName="utility:adduser" className="my-custom-class-name" svgClassName="my-custom-svg-class-name" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is xx-small', () => {
        const component = renderer.create(
            <Icon iconName="utility:ad_set" size="xx-small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is x-small', () => {
        const component = renderer.create(
            <Icon iconName="doctype:box_notes" size="x-small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is small', () => {
        const component = renderer.create(
            <Icon iconName="custom:custom6" size="small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is medium', () => {
        const component = renderer.create(
            <Icon iconName="standard:action_list_component" size="medium" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is large', () => {
        const component = renderer.create(
            <Icon iconName="action:add_photo_video" size="large" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is default', () => {
        const component = renderer.create(
            <Icon iconName="utility:animal_and_nature" variant="default" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is light', () => {
        const component = renderer.create(
            <Icon iconName="utility:answer" variant="light" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is error', () => {
        const component = renderer.create(
            <Icon iconName="utility:approval" variant="error" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is warning', () => {
        const component = renderer.create(
            <Icon iconName="utility:approval" variant="warning" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is passed and the sprite is other than utility', () => {
        const component = renderer.create(
            <Icon iconName="action:add_contact" variant="warning" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is xx-small and the sprite is action', () => {
        const component = renderer.create(
            <Icon iconName="action:add_contact" size="xx-small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is x-small and the sprite is custom', () => {
        const component = renderer.create(
            <Icon iconName="custom:custom5" size="x-small" />,
        );
        expect(component).toMatchSnapshot();
    });
});
