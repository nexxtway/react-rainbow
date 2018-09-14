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
        return classnames(
            'rainbow-radio_label',
            { 'rainbow-radio_label--disabled': disabled });
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
        } = this.props;

        return (
            <span className="rainbow-radio">
                <input
                    type="radio"
                    id={this.radioId}
                    name={name}
                    value={value}
                    checked={isChecked}
                    aria-describedby={ariaDescribedby}
                    onChange={onChange}
                    disabled={disabled} />

                <label className="rainbow-radio_label-container" htmlFor={this.radioId}>
                    <span className="rainbow-radio_faux" />
                    <RenderIf isTrue={!!label}>
                        <span className={this.getLabelClassNames()}>{label}</span>
                    </RenderIf>
                </label>
            </span>
        );
    }
}

Radio.propTypes = {
    label: PropTypes.node,
    value: PropTypes.string,
    onChange: PropTypes.func,
    ariaDescribedby: PropTypes.string,
    disabled: PropTypes.bool,
    isChecked: PropTypes.bool,
    name: PropTypes.string,
};

Radio.defaultProps = {
    label: null,
    value: undefined,
    onChange: () => {},
    ariaDescribedby: undefined,
    disabled: false,
    isChecked: false,
    name: undefined,
};
