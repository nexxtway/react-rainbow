import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from '../../libs/hocs/withReduxForm';
import SearchIcon from './icons/searchIcon';
import Input from '../Input';
import RenderIf from '../RenderIf';
import Menu from './menu';
import './styles.css';

/**
 * A Lookup is an autocomplete text input that will search against a database object,
 * it is enhanced by a panel of suggested options.
 * @category Form
 */
class Lookup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-lookup_input-container', className);
    }

    handleChange(event) {
        const { value } = event.target;
        this.setState({
            value,
        });
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
            // value,
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
        const { value } = this.state;

        return (
            <div id={id} className={this.getContainerClassName()} style={style}>
                <Input
                    ref={this.inputRef}
                    className="rainbow-lookup_input"
                    label={label}
                    placeholder={placeholder}
                    icon={<SearchIcon />}
                    iconPosition="right"
                    required={required}
                    value={value}
                    onClick={this.openModal}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={this.handleChange}
                    hideLabel={hideLabel}
                    name={name}
                    bottomHelpText={bottomHelpText}
                    isCentered={isCentered}
                    error={error}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    autoComplete="off" />

                <RenderIf isTrue={value}>
                    <Menu />
                </RenderIf>

            </div>
        );
    }
}

Lookup.propTypes = {
    /** Sets the date for the Lookup programmatically. */
    value: PropTypes.object,
    /** Text that is displayed when the Lookup is empty,
     * to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Text label for the Lookup. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    /** A boolean to hide the Lookup label. */
    hideLabel: PropTypes.bool,
    /** Specifies that the Lookup field must be filled out before submitting the form.
    * This value defaults to false. */
    required: PropTypes.bool,
    /** The name of the Lookup. */
    name: PropTypes.string,
    /** Shows the help message below the Lookup. */
    bottomHelpText: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that the Lookup text will be centered. This value defaults to false. */
    isCentered: PropTypes.bool,
    /** Specifies that the Lookup must be filled out before submitting the form. */
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that the Lookup element should be disabled. This value defaults to false. */
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

Lookup.defaultProps = {
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

export default withReduxForm(Lookup);
