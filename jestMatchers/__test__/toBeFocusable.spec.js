/* eslint-disable react/prop-types, react/no-multi-comp */
import React, { Component } from 'react';
import { mount } from 'enzyme';
import toBeFocusable from './../toBeFocusable';

const Button = () => <button />;
const Input = (props) => {
    const { onClick, onFocus, onBlur } = props;
    return <input onClick={onClick} onFocus={onFocus} onBlur={onBlur} />;
};
class ButtonIcon extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    focus() {
        this.buttonRef.current.focus();
    }

    click() {
        this.buttonRef.current.click();
    }

    blur() {
        this.buttonRef.current.blur();
    }

    render() {
        return <button ref={this.buttonRef} />;
    }
}
class FocusableInput extends Component {
    constructor(props) {
        super(props);
        this.buttonRef = React.createRef();
    }

    focus() {
        this.buttonRef.current.focus();
    }

    click() {
        this.buttonRef.current.click();
    }

    blur() {
        this.buttonRef.current.blur();
    }

    render() {
        const { onClick, onFocus, onBlur } = this.props;
        return <button ref={this.buttonRef} onClick={onClick} onFocus={onFocus} onBlur={onBlur} />;
    }
}
const components = [
    mount(<Button />),
    mount(<Input />),
    mount(<ButtonIcon />),
];

describe('toBeFocusable', () => {
    it('should return the right data when any component is passed', () => {
        expect(toBeFocusable()).toEqual({
            message: expect.any(Function),
            pass: false,
        });
    });
    it('should return the right message when any component is passed', () => {
        expect(toBeFocusable().message()).toBe('You need to pass a component returned by mount or shallow enzyme\'s methods to check whether it is focusable or not.');
    });
    it('should return the right data when the component is not mounted by enzyme', () => {
        expect(toBeFocusable(Button)).toEqual({
            message: expect.any(Function),
            pass: false,
        });
    });
    it('should return the right message when the component is not mounted by enzyme', () => {
        expect(toBeFocusable(<Button />).message()).toBe('You need to pass a component returned by mount or shallow enzyme\'s methods to check whether it is focusable or not.');
    });
    it('should return the right data when the component is not focusable', () => {
        components.forEach(component => expect(toBeFocusable(component)).toEqual({
            message: expect.any(Function),
            pass: false,
        }));
    });
    it('should return the right message when the component is not focusable', () => {
        components.forEach(component => expect(toBeFocusable(component).message())
            .toBe(`Expected ${component.name()} to be focusable but it is not.`));
    });
    it('should return the right data when the component is focusable', () => {
        const component = mount(<FocusableInput />);
        expect(toBeFocusable(component)).toEqual({
            message: '',
            pass: true,
        });
    });
});
