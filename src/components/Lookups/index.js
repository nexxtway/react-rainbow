import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SearchIcon from './icons/searchIcon';
import Input from '../Input';
import withReduxForm from './../../libs/hocs/withReduxForm';
import './styles.css';

/**
 * A Lookups is
 * @category Form
 */
class Lookups extends Component {

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-lookups_input-container', className);
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.inputRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.inputRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.inputRef.current.blur();
    }

    render() {
        const {
            value,
            placeholder,
            label,
            required,
            style,
            hideLabel,
            name,
            bottomHelpText,
            isCentered,
            error,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            id,
        } = this.props;

        return (
            <div id={id} className={this.getContainerClassName()} style={style}>
                <Input
                    ref={this.inputRef}
                    className="rainbow-lookups_input"
                    label={label}
                    placeholder={placeholder}
                    icon={<SearchIcon />}
                    iconPosition="right"
                    required={required}
                    value={value}
                    onClick={this.openModal}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    hideLabel={hideLabel}
                    name={name}
                    bottomHelpText={bottomHelpText}
                    isCentered={isCentered}
                    error={error}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    autoComplete="off" />
            </div>
        );
    }
}

Lookups.propTypes = {
    /** Sets the date for the Lookups programmatically. */
    value: PropTypes.object,
    /** Text that is displayed when the Lookups is empty,
     * to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Text label for the Lookups. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    /** A boolean to hide the Lookups label. */
    hideLabel: PropTypes.bool,
    /** Specifies that the Lookups field must be filled out before submitting the form.
    * This value defaults to false. */
    required: PropTypes.bool,
    /** The name of the Lookups. */
    name: PropTypes.string,
    /** Shows the help message below the Lookups. */
    bottomHelpText: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that the Lookups text will be centered. This value defaults to false. */
    isCentered: PropTypes.bool,
    /** Specifies that the Lookups must be filled out before submitting the form. */
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that the Lookups element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Lookups.defaultProps = {
    value: undefined,
    placeholder: null,
    hideLabel: false,
    required: false,
    name: undefined,
    bottomHelpText: null,
    isCentered: false,
    error: null,
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    id: undefined,
    className: undefined,
    style: undefined,
};

export default withReduxForm(Lookups);
