import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';
import './styles.css';

export default class Radio extends Component {
    constructor(props) {
        super(props);
        this.radioId = uniqueId('radio');
    }

    getClassNames() {
        const { className } = this.props;
        return classnames('rainbow-radio', className);
    }

    getLabelClassNames() {
        const { disabled } = this.props;
        return classnames(
            'rainbow-radio-form-element__label',
            { 'rainbow-radio-form-element__label-disabled': disabled });
    }

    render() {
        const {
            style,
            label,
            ariaDescribedby,
            onChange,
            value,
            disabled,
            isChecked,
            name,
        } = this.props;
        return (
            <span className={this.getClassNames()} style={style}>
                <input
                    type="radio"
                    id={this.radioId}
                    name={name}
                    value={value}
                    checked={isChecked}
                    aria-describedby={ariaDescribedby}
                    onChange={onChange}
                    disabled={disabled} />
                <label className="rainbow-radio__label" htmlFor={this.radioId}>
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
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func,
    ariaDescribedby: PropTypes.string,
    disabled: PropTypes.bool,
    isChecked: PropTypes.bool,
    name: PropTypes.string,
};

Radio.defaultProps = {
    label: null,
    className: undefined,
    style: undefined,
    value: undefined,
    onChange: () => {},
    ariaDescribedby: undefined,
    disabled: false,
    isChecked: false,
    name: undefined,
};
