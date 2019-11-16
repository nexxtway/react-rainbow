import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import copy from 'clipboard-copy';
import formatValue from './helpers/formatValue';
import RenderIf from '../RenderIf/index';
import CloseIcon from '../Chip/closeIcon';
import ButtonIcon from '../ButtonIcon/index';
import StyledReadOnlySelectedInput from './styled/input';
import StyledSelectedInput from './styled/selectedInput';

export default class SelectedValue extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.handleFocus = this.handleFocus.bind(this);
    }

    getContainerClassNames() {
        const { readOnly } = this.props;
        return classnames('rainbow-lookup_selected-value', {
            'rainbow-lookup_selected-value--readonly': readOnly,
        });
    }

    handleFocus() {
        const { value } = this.props;
        const { label } = formatValue(value);
        copy(label);
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

    renderInput() {
        const {
            id,
            name,
            value,
            disabled,
            tabIndex,
            readOnly,
            required,
            onClick,
            errorMessageId,
            error,
        } = this.props;
        const { label, icon } = formatValue(value);

        if (readOnly) {
            return (
                <StyledReadOnlySelectedInput
                    id={id}
                    name={name}
                    type="text"
                    value={label}
                    tabIndex={tabIndex}
                    onFocus={this.handleFocus}
                    onClick={onClick}
                    disabled={disabled}
                    readOnly
                    aria-describedby={errorMessageId}
                    required={required}
                    ref={this.inputRef}
                    iconPosition="left"
                    icon={icon}
                    error={error}
                />
            );
        }
        return (
            <StyledSelectedInput
                id={id}
                name={name}
                type="text"
                value={label}
                tabIndex={tabIndex}
                onFocus={this.handleFocus}
                onClick={onClick}
                disabled={disabled}
                readOnly
                aria-describedby={errorMessageId}
                required={required}
                ref={this.inputRef}
                iconPosition="left"
                icon={icon}
                error={error}
            />
        );
    }

    render() {
        const { value, disabled, readOnly, onClearValue } = this.props;
        const { icon } = formatValue(value);

        return (
            <div className={this.getContainerClassNames()}>
                <RenderIf isTrue={!!icon}>
                    <span className="rainbow-lookup_selected-value-icon">{icon}</span>
                </RenderIf>

                {this.renderInput()}

                <RenderIf isTrue={!(readOnly || disabled)}>
                    <span className="rainbow-lookup_selected-value-clear-button-container">
                        <ButtonIcon
                            assistiveText="clear"
                            size="small"
                            title="Remove selected option"
                            icon={<CloseIcon color="#576574" />}
                            onClick={onClearValue}
                        />
                    </span>
                </RenderIf>
            </div>
        );
    }
}

SelectedValue.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.shape({
            label: PropTypes.string,
            description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            icon: PropTypes.node,
        }),
        PropTypes.string,
    ]),
    id: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onClearValue: PropTypes.func,
    errorMessageId: PropTypes.string,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

SelectedValue.defaultProps = {
    value: undefined,
    name: undefined,
    id: undefined,
    disabled: false,
    required: false,
    readOnly: false,
    tabIndex: undefined,
    onClick: () => {},
    onClearValue: undefined,
    errorMessageId: undefined,
    error: undefined,
};
