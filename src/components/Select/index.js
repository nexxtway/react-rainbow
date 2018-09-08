import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../libs/utils';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../Input/requiredAsterisk';
import './styles.css';

export default class Select extends Component {
    constructor(props) {
        super(props);
        this.selectId = uniqueId('select');
    }

    getContainerClassNames() {
        const { classNames, error } = this.props;
        return classnames('rainbow-form-element', { 'rainbow-has-error': error }, classNames);
    }

    getOptionItems() {
        const { options } = this.props;
        return options.map(option => <option value={option.value} key={uniqueId('option-')}>{option.label}</option>);
    }

    render() {
        const { label, onChange, error, required, disabled, style } = this.props;
        return (
            <div className={this.getContainerClassNames()} style={style}>
                <RenderIf isTrue={!!label}>
                    <label className="rainbow-form-element__label" htmlFor={this.selectId}>
                        <RequiredAsterisk required={required} />
                        {label}
                    </label>
                </RenderIf>
                <div className="rainbow-form-element__control">
                    <div className="rainbow-select_container">
                        <select
                            className="rainbow-select"
                            placeholder="please select"
                            id={this.selectId}
                            onChange={onChange}
                            value={null}
                            disabled={disabled}>
                            {this.getOptionItems()}
                        </select>
                    </div>
                </div>
                <RenderIf isTrue={!!error}>
                    <div className="rainbow-form-element__help">{error}</div>
                </RenderIf>
            </div>
        );
    }
}

Select.propTypes = {
    /** The input label */
    label: PropTypes.string,
    /** The action triggered when a option item is selected. */
    onChange: PropTypes.func,
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    error: PropTypes.node,
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The option items to be displayed. */
    options: PropTypes.arrayOf(PropTypes.shape(
        {
            value: PropTypes.string,
            label: PropTypes.string,
        })),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    classNames: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Select.defaultProps = {
    label: null,
    onChange: () => {},
    error: null,
    required: false,
    disabled: false,
    options: [],
    classNames: '',
    style: {},
};

