import React from 'react';
import classnames from 'classnames';
import InputError from './InputError.jsx';
import InputFile from './InputFile.jsx';
import uniqueId from './libs/uniqueId';

let isRegularInput = (type) => ['text', 'search', 'number', 'email', 'password'].indexOf(type) !== -1;
let isTypeFile = (type) => type === 'file';

export default class Input extends React.Component {

    componentWillMount() {
        this.inputId = uniqueId('input');
    }

    render() {
        if (isRegularInput(this.props.type)) return this.renderRegularInput();
        if (isTypeFile) return <InputFile id={ this.inputId } {...this.props}/>
    }

    renderRegularInput() {
        let inputContainerClasses = classnames('slds-form-element', {
            'slds-has-error' : !this.props.isValid }, this.props.className);

        return (
            <div className={ inputContainerClasses }>
                <label className="slds-form-element__label" htmlFor={ this.inputId }>
                    { this.props.required ? <abbr className="slds-required" title="required">*</abbr> : null }
                    { this.props.label }
                </label>
                <div className="slds-form-element__control">
                    <input id={ this.inputId }
                           ref={ (input) => this.input = input }
                           className="slds-input"
                           onInput={ (e) => this.handleOnInput(e) }
                           onBlur={ (e) => this.handleOnBlur(e) }
                           onFocus={ (e) => this.handleOnFocus(e) }
                           type={ this.props.type }
                           step={ this.props.step }
                           placeholder={ this.props.placeholder }
                           required={ this.props.required }
                           disabled={ this.props.disabled }
                           name={ this.props.name }
                    />
                </div>
                <InputError isVisible={ !this.props.isValid } message="The field is invalid."/>
            </div>
        );
    }

    handleOnInput(e) {
        this.props.onChange && this.props.onChange(e);
    }

    handleOnBlur(e) {
        this.props.onBlur && this.props.onBlur(e);
    }

    handleOnFocus(e) {
        this.props.onFocus && this.props.onFocus(e);
    }

}

Input.propTypes = {
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    required: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    step: React.PropTypes.number,
    name: React.PropTypes.string,
    isValid: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func
};

Input.defaultProps = {
    type: 'text',
    required: false,
    disabled: false,
    step: 0.01
};