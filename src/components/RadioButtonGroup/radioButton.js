import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';

export default class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.radioId = uniqueId('radio');
    }

    getContainerClassNames() {
        const { isChecked, disabled } = this.props;
        return classnames(
            'rainbow-radio-button-group_radio',
            {
                'rainbow-radio-button-group_radio--checked': isChecked,
            },
            {
                'rainbow-radio-button-group_radio--disabled': disabled,
            },
        );
    }

    getLabelClassNames() {
        const { disabled } = this.props;
        return classnames('rainbow-radio-button-group_radio-label', {
            'rainbow-radio-button-group_radio-label--disabled': disabled,
        });
    }

    render() {
        const {
            label,
            ariaDescribedby,
            onChange,
            value,
            disabled,
            isChecked,
            name,
            required,
        } = this.props;

        return (
            <span className={this.getContainerClassNames()}>
                <input
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

                <label
                    className="rainbow-radio-button-group_radio-label-container"
                    htmlFor={this.radioId}
                >
                    <RenderIf isTrue={!!label}>
                        <span className={this.getLabelClassNames()}>{label}</span>
                    </RenderIf>
                </label>
            </span>
        );
    }
}

RadioButton.propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    ariaDescribedby: PropTypes.string,
    disabled: PropTypes.bool,
    isChecked: PropTypes.bool,
    name: PropTypes.string,
    required: PropTypes.bool.isRequired,
};

RadioButton.defaultProps = {
    value: undefined,
    onChange: () => {},
    ariaDescribedby: undefined,
    disabled: false,
    isChecked: false,
    name: undefined,
};
