import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import formatValue from './helpers/formatValue';
import RenderIf from '../RenderIf/index';
import CloseIcon from '../Chip/closeIcon';
import ButtonIcon from '../ButtonIcon/index';

export default class SelectedValue extends Component {
    getInputClassNames() {
        const { value } = this.props;
        const { icon } = formatValue(value);
        return classnames('rainbow-lookup_selected-value-input', {
            'rainbow-lookup_selected-value-input-w-icon': !!icon,
        });
    }

    render() {
        const {
            id,
            name,
            value,
            disabled,
            tabIndex,
            required,
            ref,
            onFocus,
            onBlur,
            onClick,
            onClearValue,
            ...rest
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
                    ref={ref}
                    required={required}
                    {...rest}
                />
                <span className="rainbow-lookup_selected-value-clear-button-container">
                    <ButtonIcon
                        assistiveText="clear"
                        size="small"
                        title="clear"
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
    ref: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onClearValue: PropTypes.func,
};

SelectedValue.defaultProps = {
    value: undefined,
    name: undefined,
    id: undefined,
    disabled: false,
    required: false,
    readOnly: false,
    ref: undefined,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClearValue: undefined,
};
