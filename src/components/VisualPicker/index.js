import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from './../../libs/hocs/withReduxForm';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import { uniqueId } from './../../libs/utils';
import { Provider } from './context';
import './styles.css';

/**
 * A VisualPicker can be either radio buttons, checkboxes, or links that are visually enhanced.
 * @category Form
 */
class VisualPicker extends Component {
    constructor(props) {
        super(props);
        this.errorId = uniqueId('error-message');
        this.groupNameId = props.name || uniqueId('visual-picker');
        this.handleChange = this.handleChange.bind(this);
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-visual-picker_container', className);
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorId;
        }
        return undefined;
    }

    handleChange(optionName, optionChecked) {
        const { onChange, multiple, value } = this.props;
        let currentValue = optionName;
        if (multiple) {
            currentValue = optionChecked
                ? [...value, optionName]
                : value.filter(item => item !== optionName);
        }
        onChange(currentValue);
    }

    render() {
        const { style, label, required, error, id, children, value, multiple } = this.props;
        const context = {
            ariaDescribedby: this.getErrorMessageId(),
            groupName: this.groupNameId,
            privateOnChange: this.handleChange,
            value,
            multiple,
        };

        return (
            <fieldset id={id} className={this.getContainerClassNames()} style={style}>
                <RenderIf isTrue={!!label}>
                    <legend className="rainbow-visual-picker_label">
                        <RequiredAsterisk required={required} />
                        {label}
                    </legend>
                </RenderIf>
                <div className="rainbow-visual-picker_options-container">
                    <Provider value={context}>{children}</Provider>
                </div>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className="rainbow-visual-picker_text-error">
                        {error}
                    </div>
                </RenderIf>
            </fieldset>
        );
    }
}

VisualPicker.propTypes = {
    /** The name of VisualPicker. */
    name: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** If is set to true the VisualPicker is required. This value defaults to false. */
    required: PropTypes.bool,
    /** The title at the top of the VisualPicker component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an VisualPicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** If true then a multiple selection is allowed */
    multiple: PropTypes.bool,
};

VisualPicker.defaultProps = {
    name: null,
    value: undefined,
    id: undefined,
    onChange: () => {},
    required: false,
    label: '',
    error: null,
    className: undefined,
    style: undefined,
    children: [],
    multiple: false,
};

export default withReduxForm(VisualPicker);
