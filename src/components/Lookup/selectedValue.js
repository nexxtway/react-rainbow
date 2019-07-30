import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import formatValue from './helpers/formatValue';
import RenderIf from '../RenderIf/index';
import CloseIcon from '../Chip/closeIcon';
import ButtonIcon from '../ButtonIcon/index';

export default class SelectedValue extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    getInputClassNames() {
        const { value } = this.props;
        const { icon } = formatValue(value);
        return classnames('rainbow-lookup_selected-value-input', {
            'rainbow-lookup_selected-value-input-with-icon': !!icon,
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
            id,
            name,
            value,
            disabled,
            tabIndex,
            required,
            onClick,
            onClearValue,
            errorMessageId,
        } = this.props;
        const { label, icon } = formatValue(value);
        return (
            <div className="rainbow-lookup_selected-value">
                <RenderIf isTrue={!!icon}>
                    <span className="rainbow-lookup_selected-value-icon">{icon}</span>
                </RenderIf>
                <input
                    id={id}
                    name={name}
                    type="text"
                    className={this.getInputClassNames()}
                    value={label}
                    tabIndex={tabIndex}
                    onClick={onClick}
                    disabled={disabled}
                    readOnly
                    aria-describedby={errorMessageId}
                    required={required}
                    ref={this.inputRef}
                />
                <span className="rainbow-lookup_selected-value-clear-button-container">
                    <ButtonIcon
                        assistiveText="clear"
                        size="small"
                        title="Remove selected option"
                        icon={<CloseIcon color="#576574" />}
                        onClick={onClearValue}
                    />
                </span>
            </div>
        );
    }
}

SelectedValue.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
            icon: PropTypes.node,
        }),
        PropTypes.string,
    ]),
    id: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onClearValue: PropTypes.func,
    errorMessageId: PropTypes.string,
};

SelectedValue.defaultProps = {
    value: undefined,
    name: undefined,
    id: undefined,
    disabled: false,
    required: false,
    tabIndex: undefined,
    onClick: () => {},
    onClearValue: undefined,
    errorMessageId: undefined,
};
