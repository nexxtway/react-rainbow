import React from 'react';
import { mount } from 'enzyme';
import Button from './../index';
import Spinner from '../../Spinner';

describe('<Button/>', () => {
    it('should focus the button when the focus method is called', () => {
        const component = mount(<Button label="OK" />);

        component.instance().focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const buttonDataId = component.find('button').prop('data-id');
        expect(focusedElementDataId).toBe(buttonDataId);
    });
    it('should blur the button when the blur method is called', () => {
        const component = mount(<Button label="OK" />);
        const instance = component.instance();
        const buttonDataId = component.find('button').prop('data-id');

        instance.focus();
        expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
        instance.blur();
        expect(document.activeElement.getAttribute('data-id')).toBeNull();
    });
    it('should set disable to true when it is passed', () => {
        const component = mount(<Button label="my label" disabled />);

        expect(component.find('button').prop('disabled')).toBe(true);
    });
    it('should set the tabIndex passed', () => {
        const component = mount(<Button label="my label" tabIndex={0} />);

        expect(component.find('button').prop('tabIndex')).toBe(0);
    });
    it('should set the title passed', () => {
        const component = mount(<Button label="my label" title="my title" />);

        expect(component.find('button').prop('title')).toBe('my title');
    });
    it('should set the type passed', () => {
        const component = mount(<Button label="my label" type="reset" />);

        expect(component.find('button').prop('type')).toBe('reset');
    });
    it('should set aria-haspopup to true when it is passed', () => {
        const component = mount(<Button label="my label" ariaHaspopup />);

        expect(component.find('button').prop('aria-haspopup')).toBe(true);
    });
    it('should set the label passed as children', () => {
        const component = mount(<Button label="Click me" />);

        expect(component.find('button').text()).toBe('Click me');
    });
    it('should render the Spinner when isLoading is passed', () => {
        const component = mount(<Button label="Button Label" isLoading />);
        expect(component.find(Spinner).exists()).toBe(true);
    });
    it('should set disable to true when isLoading is passed', () => {
        const component = mount(<Button label="my label" isLoading />);

        expect(component.find('button').prop('disabled')).toBe(true);
    });
    it('should render the Spinner and label when isLoading and label are passed', () => {
        const component = mount(<Button label="OK" isLoading />);
        expect(component.text()).toBe('OK');
        expect(component.find(Spinner).exists()).toBe(true);
    });
    it('should render the Spinner and children when isLoading, children and label are passed', () => {
        const component = mount(
            <Button label="OK" isLoading>
                Test
            </Button>,
        );
        expect(component.text()).toBe('Test');
        expect(component.find(Spinner).exists()).toBe(true);
    });
    it('should render the children when label and children are passed', () => {
        const component = mount(<Button label="OK">Test</Button>);
        expect(component.text()).toBe('Test');
    });
});
