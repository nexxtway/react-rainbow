import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RadioItmes from './radioItems';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';
import './styles.css';

/**
* A select list that can have a single entry checked at any one time.
*/
export default class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.errorId = uniqueId('error-message');
        this.groupNameId = uniqueId('options');
    }

    getContainerClassNames() {
        const { className, error } = this.props;
        return classnames(
            'rainbow-radio-group-container',
            { 'rainbow-radio-group-has-error': !!error },
            className,
        );
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorId;
        }
        return undefined;
    }

    render() {
        const {
            style,
            label,
            required,
            error,
            onChange,
            options,
            value,
        } = this.props;

        return (
            <fieldset className={this.getContainerClassNames()} style={style}>
                <RenderIf isTrue={!!label}>
                    <legend className="rainbow-radio-group-label">
                        <RenderIf isTrue={required}>
                            <abbr className="rainbow-radio-group-required" title="required">*</abbr>
                        </RenderIf>
                        {label}
                    </legend>
                </RenderIf>
                <div className="rainbow-radio-group-inner-container">
                    <RadioItmes
                        value={value}
                        onChange={onChange}
                        options={options}
                        name={this.groupNameId}
                        ariaDescribedby={this.getErrorMessageId()} />

                </div>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className="rainbow-radio-group-error">
                        {error}
                    </div>
                </RenderIf>
            </fieldset>
        );
    }
}

RadioGroup.propTypes = {
    /** The radio group label */
    label: PropTypes.node,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** The value of the element. */
    value: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** If is set to true the radio group is required. This value defaults to false. */
    required: PropTypes.bool,
    /** An array with the radio options. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
            disabled: PropTypes.bool,
        }),
    ),
    /** Specifies that an radio group must be filled out before submitting the form. */
    error: PropTypes.node,
};

RadioGroup.defaultProps = {
    label: null,
    className: undefined,
    style: undefined,
    value: undefined,
    onChange: () => {},
    required: false,
    options: [],
    error: null,
};
