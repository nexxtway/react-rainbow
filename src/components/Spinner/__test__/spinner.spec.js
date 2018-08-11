import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Spinner from './../index';

describe('<Spinner/>', () => {
    it('should not render the spinner when isVisible is false', () => {
        const component = mount(
            <Spinner isVisible={false} />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should not render the spinner when isVisible is true', () => {
        const component = mount(
            <Spinner isVisible />,
        );
        expect(component.children().length).toBe(1);
    });
    it('should not render the assistive text when is not passed', () => {
        const component = mount(
            <Spinner />,
        );
        expect(component.find('.slds-assistive-text').length).toBe(0);
    });
    it('should render the assistive text passed', () => {
        const component = mount(
            <Spinner assistiveText="for screen readers" />,
        );
        expect(component.find('.slds-assistive-text').text()).toBe('for screen readers');
    });
    it('should have the right class names when ehiter the variant and size are not passed', () => {
        const component = renderer.create(
            <Spinner />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when a custom container class name is passed, variant is brand and size is large', () => {
        const component = renderer.create(
            <Spinner variant="brand" size="large" containerClassName="custom-container-classname" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant is inverse and size is medium', () => {
        const component = renderer.create(
            <Spinner variant="inverse" size="medium" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is small', () => {
        const component = renderer.create(
            <Spinner size="small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is x-small', () => {
        const component = renderer.create(
            <Spinner size="x-small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size is xx-small', () => {
        const component = renderer.create(
            <Spinner size="xx-small" />,
        );
        expect(component).toMatchSnapshot();
    });
});
