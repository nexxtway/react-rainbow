import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RadioItmes from './radioItems';
import RenderIf from '../RenderIf';
import './styles.css';
import { uniqueId } from '../../libs/utils';

export default class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.errorId = uniqueId('error');
        this.groupNameId = uniqueId('options');
    }

    getContainerClassNames() {
        const { className, error } = this.props;
        return classnames(
            'rainbow-radio-group-form-element',
            { 'rainbow-radio-group-has-error': !!error },
            className);
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
                    <legend className="rainbow-radio-group-form-element__label">
                        <RenderIf isTrue={required}>
                            <abbr className="rainbow-radio-group-required" title="required">*</abbr>
                        </RenderIf>
                        {label}
                    </legend>
                </RenderIf>
                <div className="rainbow-radio-group-form-element__control">
                    <RadioItmes
                        value={value}
                        onChange={onChange}
                        options={options}
                        name={this.groupNameId} />
                </div>
                <RenderIf isTrue={!!error}>
                    <div id={this.errorId} className="rainbow-radio-group-form-element__error">{error}</div>
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
    required: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
            disabled: PropTypes.bool,
        }),
    ),
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
    error: undefined,
};
