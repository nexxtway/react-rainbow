import React from 'react';
import { mount } from 'enzyme/build/index';
import renderer from 'react-test-renderer';
import Input from './../index';

describe('<Input/>', () => {
    it('should set the type passed in the Input element', () => {
        const component = mount(
            <Input type="color" />,
        );
        expect(component.find('input').prop('type')).toBe('color');
    });
    it('should set the value passed in the Input element', () => {
        const component = mount(
            <Input value="Input value" />,
        );
        expect(component.find('input').prop('value')).toBe('Input value');
    });
    it('should set the placeholder passed in the Input element', () => {
        const component = mount(
            <Input placeholder="Placeholder Text" />,
        );
        expect(component.find('input').prop('placeholder')).toBe('Placeholder Text');
    });
    it('should set the onChange passed in the Input element', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <Input onChange={onChangeFn} />,
        );
        expect(component.find('input').prop('onChange')).toBe(onChangeFn);
    });
    it('should set the tabIndex passed in the Input element', () => {
        const component = mount(
            <Input tabIndex={0} />,
        );
        expect(component.find('input').prop('tabIndex')).toBe(0);
    });
    it('should set the disabled passed in the Input element', () => {
        const component = mount(
            <Input disabled />,
        );
        expect(component.find('input').prop('disabled')).toBe(true);
    });
    it('should set the readonly passed in the Input element', () => {
        const component = mount(
            <Input readOnly />,
        );
        expect(component.find('input').prop('readOnly')).toBe(true);
    });
    it('should set the required passed in the Input element', () => {
        const component = mount(
            <Input required />,
        );
        expect(component.find('input').prop('required')).toBe(true);
    });
    it('should set the maxLength passed in the Input element', () => {
        const component = mount(
            <Input maxLength={0} />,
        );
        expect(component.find('input').prop('maxLength')).toBe(0);
    });
    it('should set the minLength passed in the Input element', () => {
        const component = mount(
            <Input minLength={0} />,
        );
        expect(component.find('input').prop('minLength')).toBe(0);
    });
    it('should set the pattern passed in the Input element', () => {
        const component = mount(
            <Input pattern="Input Pattern" />,
        );
        expect(component.find('input').prop('pattern')).toBe('Input Pattern');
    });
    it('should set the bottomHelpText passed in the Help element', () => {
        const component = mount(
            <Input bottomHelpText="Help text" />,
        );
        expect(component.find('Help').prop('text')).toBe('Help text');
    });
    it('should set the error passed in the Error element', () => {
        const component = mount(
            <Input error="Error text" />,
        );
        expect(component.find('Error').prop('error')).toBe('Error text');
    });
    it('should set the error passed in the RequiredAsterisk element', () => {
        const component = mount(
            <Input required />,
        );
        expect(component.find('RequiredAsterisk').prop('required')).toBe(true);
    });
    it('should render an icon on the right when iconName is passed and iconPosition is right', () => {
        const component = mount(
            <Input iconName="utility:activity" iconPosition="right" />,
        );
        expect(component.find('[data-id="input-left-icon"]').prop('isVisible')).toBe(false);
        expect(component.find('[data-id="input-right-icon"]').prop('isVisible')).toBe(true);
    });
    it('should have the right class names when have a custom class', () => {
        const component = renderer.create(
            <Input className="my-custom-class-name" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when iconName is passed', () => {
        const component = renderer.create(
            <Input iconName="utility:activity" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when error is passed', () => {
        const component = renderer.create(
            <Input error="Error text" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when labelClassName is passed', () => {
        const component = renderer.create(
            <Input labelClassName="my-custom-label-class-name" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when isBare', () => {
        const component = renderer.create(
            <Input isBare />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when isCentered', () => {
        const component = renderer.create(
            <Input isCentered />,
        );
        expect(component).toMatchSnapshot();
    });
});
