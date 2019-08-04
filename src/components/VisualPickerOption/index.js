/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Consumer as VisualPickerConsumer } from '../VisualPicker/context';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import CheckmarkIcon from './checkmark';
import './styles.css';

class PickerOption extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('radio');
        this.handleChange = this.handleChange.bind(this);
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-visual-picker-option_content-container', className);
    }

    getType() {
        const { multiple } = this.props;
        if (multiple) {
            return 'checkbox';
        }
        return 'radio';
    }

    isChecked() {
        const { multiple, name, value } = this.props;
        if (multiple) {
            return Array.isArray(value) && value.includes(name);
        }

        return typeof value === 'string' && name === value;
    }

    handleChange(event) {
        const { name, privateOnChange } = this.props;
        privateOnChange(name, event.target.checked);
    }

    render() {
        const { disabled, children, footer, style } = this.props;
        const { groupName, ariaDescribedby } = this.props;

        return (
            <span className={this.getContainerClassNames()} style={style}>
                <input
                    className="rainbow-visual-picker-option_input"
                    type={this.getType()}
                    id={this.inputId}
                    name={groupName}
                    checked={this.isChecked()}
                    aria-describedby={ariaDescribedby}
                    onChange={this.handleChange}
                    disabled={disabled}
                />

                <label className="rainbow-visual-picker-option_content" htmlFor={this.inputId}>
                    <span className="rainbow-visual-picker-option">
                        <RenderIf isTrue={this.isChecked()}>
                            <span className="rainbow-visual-picker-option_selected-element" />
                            <CheckmarkIcon className="rainbow-visual-picker-option_checkmark-icon" />
                        </RenderIf>
                        {children}
                    </span>
                    <RenderIf isTrue={!!footer}>
                        <footer className="rainbow-visual-picker-option_footer">{footer}</footer>
                    </RenderIf>
                </label>
            </span>
        );
    }
}

/**
 * A VisualPickerOption.
 * @category Form
 */
export default function VisualPickerOption(props) {
    return (
        <VisualPickerConsumer>
            {context => <PickerOption {...props} {...context} />}
        </VisualPickerConsumer>
    );
}

VisualPickerOption.propTypes = {
    /** It is a unique value that identifies the picker option. */
    name: PropTypes.string.isRequired,
    /** It is what will be displayed at the bottom of the component. */
    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** Specifies that an VisualPickerOption element should be disabled.
     * This value defaults to false. */
    disabled: PropTypes.bool,
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

VisualPickerOption.defaultProps = {
    name: undefined,
    footer: undefined,
    disabled: false,
    className: undefined,
    style: undefined,
    children: [],
    ariaDescribedby: undefined,
};
