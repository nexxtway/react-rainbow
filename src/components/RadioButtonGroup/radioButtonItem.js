import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';
import StyledButtonItem from './styled/buttonItem';
import StyledButtonItemLabel from './styled/buttonItemLabel';
import StyledInput from './styled/input';

export default class RadioButtonItem extends Component {
    constructor(props) {
        super(props);
        this.radioId = uniqueId('radiobutton');
    }

    render() {
        const {
            itemRef,
            label,
            ariaDescribedby,
            onChange,
            value,
            disabled,
            isChecked,
            name,
            required,
            variant,
            size,
        } = this.props;

        return (
            <StyledButtonItem
                data-id="radio-button-group_radio-container"
                variant={variant}
                size={size}
                isChecked={isChecked}
                disabled={disabled}
                ref={itemRef}
            >
                <StyledInput
                    type="radio"
                    required={required}
                    id={this.radioId}
                    name={name}
                    value={value}
                    checked={isChecked}
                    aria-describedby={ariaDescribedby}
                    onChange={onChange}
                    disabled={disabled}
                />

                <StyledButtonItemLabel
                    disabled={disabled}
                    isChecked={isChecked}
                    variant={variant}
                    htmlFor={this.radioId}
                    size={size}
                >
                    {label}
                </StyledButtonItemLabel>
            </StyledButtonItem>
        );
    }
}

RadioButtonItem.propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    ariaDescribedby: PropTypes.string,
    disabled: PropTypes.bool,
    isChecked: PropTypes.bool,
    name: PropTypes.string,
    required: PropTypes.bool.isRequired,
    itemRef: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(['default', 'inverse', 'brand']),
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
};

RadioButtonItem.defaultProps = {
    value: undefined,
    onChange: () => {},
    ariaDescribedby: undefined,
    disabled: false,
    isChecked: false,
    name: undefined,
    variant: 'default',
    size: 'medium',
};
