import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import CheckmarkIcon from './checkmark';
import './styles.css';

/**
 * A VisualPickerOption.
 * @category Form
 */
export default class VisualPickerOption extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('radio');
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

    render() {
        const {
            ariaDescribedby,
            onChange,
            value,
            disabled,
            name,
            children,
            required,
            id,
            footer,
            style,
            // this is a test, it is not a prop
            isChecked,
        } = this.props;

        return (
            <span id={id} className={this.getContainerClassNames()} style={style}>
                <input
                    className="rainbow-visual-picker-option_input"
                    type={this.getType()}
                    required={required}
                    id={this.inputId}
                    name={name}
                    value={value}
                    checked={isChecked}
                    aria-describedby={ariaDescribedby}
                    onChange={onChange}
                    disabled={disabled}
                />

                <label className="rainbow-visual-picker-option_content" htmlFor={this.inputId}>
                    <span className="rainbow-visual-picker-option">
                        <RenderIf isTrue={!!isChecked}>
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

VisualPickerOption.propTypes = {
    /** The value of the element. */
    value: PropTypes.string,
    /** The name of the radio group */
    name: PropTypes.string,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** If is set to true the radio group is required. This value defaults to false. */
    required: PropTypes.bool,
    /** It is what will be displayed at the bottom of the component. It is a function that
    take the iteration item as argument and return an element */
    footer: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,

    onChange: PropTypes.func,
    ariaDescribedby: PropTypes.string,
    disabled: PropTypes.bool,
    isChecked: PropTypes.bool,

    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

VisualPickerOption.defaultProps = {
    value: undefined,
    name: undefined,
    id: undefined,
    required: false,
    footer: undefined,
    children: [],
    className: undefined,
    style: undefined,

    onChange: () => {},
    ariaDescribedby: undefined,
    disabled: false,
    isChecked: false,
};
