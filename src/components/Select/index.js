import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from './../../libs/hocs/withReduxForm';
import { uniqueId } from './../../libs/utils';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import Options from './options';
import './styles.css';

/**
* Select element presents a menu of options.
*/
class Select extends Component {
    constructor(props) {
        super(props);
        this.selectId = uniqueId('select');
        this.selectRef = React.createRef();
    }

    getContainerClassNames() {
        const { className, error } = this.props;
        return classnames('rainbow-select_container', {
            'rainbow-select--error': error,
        }, className);
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.selectRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.selectRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.selectRef.current.blur();
    }

    render() {
        const {
            label,
            value,
            onChange,
            onFocus,
            onBlur,
            onClick,
            error,
            required,
            disabled,
            options,
            style,
            id,
        } = this.props;

        return (
            <div className={this.getContainerClassNames()} style={style} id={id}>
                <RenderIf isTrue={!!label}>
                    <label className="rainbow-select_label" htmlFor={this.selectId}>
                        <RequiredAsterisk required={required} />
                        {label}
                    </label>
                </RenderIf>
                <div className="rainbow-select_inner-container" disabled={disabled}>
                    <select
                        className="rainbow-select"
                        id={this.selectId}
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={onClick}
                        value={value}
                        required={required}
                        disabled={disabled}
                        ref={this.selectRef}>

                        <Options options={options} />
                    </select>
                </div>
                <RenderIf isTrue={!!error}>
                    <div className="rainbow-select_text-error">{error}</div>
                </RenderIf>
            </div>
        );
    }
}

Select.propTypes = {
    /** Text label for the select. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies the selected value. */
    value: PropTypes.string,
    /** The action triggered when a option item is selected. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The option items to be displayed. */
    options: PropTypes.arrayOf(PropTypes.shape(
        {
            label: PropTypes.oneOfType([
                PropTypes.string, PropTypes.node,
            ]),
            value: PropTypes.string,
            disabled: PropTypes.bool,
        })),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
};

Select.defaultProps = {
    label: null,
    value: undefined,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    error: null,
    required: false,
    disabled: false,
    options: [],
    className: undefined,
    style: undefined,
    id: undefined,
};

export default withReduxForm(Select);
