import React from 'react';
import { mount } from 'enzyme';
import withReduxForm from './../';

function Input() {
    return <input />;
}

const InputComponent = withReduxForm(Input);

describe('withReduxForm', () => {
    it('should render an input element with the right props', () => {
        const component = mount(<InputComponent error="my error" value="some text" type="email" />);
        expect(component.find('Input').props()).toEqual({
            error: 'my error',
            value: 'some text',
            type: 'email',
        });
    });
    it('should render an input element with the right props when redux form input and meta objects are passed', () => {
        const input = {
            value: 'redux form value',
            onChange: () => {},
        };
        const meta = {
            error: 'redux form error from meta',
            pristine: true,
            valid: false,
        };
        const component = mount(
            <InputComponent
                input={input}
                meta={meta}
                error="my error"
                value="some text"
                type="email"
            />,
        );
        expect(component.find('Input').props()).toEqual({
            error: 'my error',
            onChange: expect.any(Function),
            type: 'email',
            value: 'redux form value',
        });
    });
    it('should pass the right error when redux form meta object is passed but touched and submitFailed are false', () => {
        const meta = {
            error: 'redux form error from meta',
            touched: false,
            submitFailed: false,
        };
        const component = mount(<InputComponent meta={meta} error="my error" />);
        expect(component.find('Input').prop('error')).toBe('my error');
    });
    it('should pass the right error when redux form meta object is passed and touched is true', () => {
        const meta = {
            error: 'redux form error from meta',
            touched: true,
            submitFailed: false,
        };
        const component = mount(<InputComponent meta={meta} error="my error" />);
        expect(component.find('Input').prop('error')).toBe('redux form error from meta');
    });
    it('should pass the right error when redux form meta object is passed and submitFailed is true', () => {
        const meta = {
            error: 'redux form error from meta',
            touched: false,
            submitFailed: true,
        };
        const component = mount(<InputComponent meta={meta} error="my error" />);
        expect(component.find('Input').prop('error')).toBe('redux form error from meta');
    });
});
