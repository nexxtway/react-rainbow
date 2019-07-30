import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from './../../libs/hocs/withReduxForm';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import { uniqueId } from './../../libs/utils';
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

    render() {
        const {
            style,
            label,
            required,
            error,
            id,
            children,
            // multiple,
            // onChange,
            // value,
        } = this.props;

        return (
            <fieldset id={id} className={this.getContainerClassNames()} style={style}>
                <RenderIf isTrue={!!label}>
                    <legend className="rainbow-visual-picker_label">
                        <RequiredAsterisk required={required} />
                        {label}
                    </legend>
                </RenderIf>
                <div className="rainbow-visual-picker_options-container">{children}</div>
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
    /** The name of the radio group */
    name: PropTypes.string,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** If is set to true the radio group is required. This value defaults to false. */
    required: PropTypes.bool,
    /** The title at the top of the component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an radio group must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The callback fired when a item is selected */
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    onChange: PropTypes.func,
    /** If true then a multiple selection is allowed */
    multiple: PropTypes.bool,
    /** The value of the element. */
    value: PropTypes.string,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

VisualPicker.defaultProps = {
    value: undefined,
    name: null,
    label: '',
    error: null,
    multiple: false,
    onChange: () => {},
    required: false,
    id: undefined,
    className: undefined,
    style: undefined,
    children: [],
};

export default withReduxForm(VisualPicker);
