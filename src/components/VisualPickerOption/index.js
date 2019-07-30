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

    // this need to be discussed with reinier, so not touch it for now.
    // getType() {
    //     const { multiple } = this.props;
    //     if (multiple) {
    //         return 'checkbox';
    //     }
    //     return 'radio';
    // }

    isChecked() {
        // here goes logic to determine if it is checked
        return false;
    }

    render() {
        const { disabled, name, children, footer, style } = this.props;

        return (
            <span className={this.getContainerClassNames()} style={style}>
                <input
                    className="rainbow-visual-picker-option_input"
                    // type={this.getType()}
                    id={this.inputId}
                    // here goes what is in this.groupNameId in the VisualPicker parent
                    // name={name}
                    // checked={this.isChecked()}
                    // here goes what returns getErrorMessageId from parent component
                    // aria-describedby={ariaDescribedby}
                    // onChange={onChange}
                    disabled={disabled}
                />

                <label className="rainbow-visual-picker-option_content" htmlFor={this.inputId}>
                    <span className="rainbow-visual-picker-option">
                        <RenderIf isTrue={!!this.isChecked()}>
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
    /** It is a unitque value the identifies the picker option. */
    name: PropTypes.string,
    /** It is what will be displayed at the bottom of the component. It is a function that
    take the iteration item as argument and return an element */
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
