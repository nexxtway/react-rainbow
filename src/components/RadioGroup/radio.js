import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';

export default class Radio extends Component {
    constructor(props) {
        super(props);
        this.radioId = uniqueId('radio');
    }

    getLabelClassNames() {
        const { disabled } = this.props;
        return classnames('rainbow-radio-group_radio-label', {
            'rainbow-radio-group_radio-label--disabled': disabled,
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
            <span className="rainbow-radio-group_radio">
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

                <label className="rainbow-radio-group_radio-label-container" htmlFor={this.radioId}>
                    <span className="rainbow-radio-group_radio-faux" />
                    <RenderIf isTrue={!!label}>
                        <span className={this.getLabelClassNames()}>{label}</span>
                    </RenderIf>
                </label>
            </span>
        );
    }
}

Radio.propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    ariaDescribedby: PropTypes.string,
    disabled: PropTypes.bool,
    isChecked: PropTypes.bool,
    name: PropTypes.string,
    required: PropTypes.bool.isRequired,
};

Radio.defaultProps = {
    value: undefined,
    onChange: () => {},
    ariaDescribedby: undefined,
    disabled: false,
    isChecked: false,
    name: undefined,
};
