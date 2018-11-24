import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withReduxForm from './../../libs/hocs/withReduxForm';
import RadioItmes from './radioItems';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import { uniqueId } from '../../libs/utils';
import './styles.css';

/**
* A select list that can have a single entry checked at any one time.
*/
class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.errorId = uniqueId('error-message');
        this.groupNameId = props.name || uniqueId('options');
    }

    getContainerClassNames() {
        const { className, error } = this.props;
        return classnames(
            'rainbow-radio-group_container',
            { 'rainbow-radio-group--error': !!error },
            className,
        );
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
            onChange,
            options,
            value,
            id,
        } = this.props;

        return (
            <fieldset id={id} className={this.getContainerClassNames()} style={style}>
                <RenderIf isTrue={!!label}>
                    <legend className="rainbow-radio-group_label">
                        <RequiredAsterisk required={required} />
                        {label}
                    </legend>
                </RenderIf>
                <div className="rainbow-radio-group_inner-container">
                    <RadioItmes
                        value={value}
                        onChange={onChange}
                        options={options}
                        name={this.groupNameId}
                        required={required}
                        ariaDescribedby={this.getErrorMessageId()} />

                </div>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className="rainbow-radio-group_text-error">
                        {error}
                    </div>
                </RenderIf>
            </fieldset>
        );
    }
}

RadioGroup.propTypes = {
    /** The radio group label */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The name of the radio group */
    name: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** If is set to true the radio group is required. This value defaults to false. */
    required: PropTypes.bool,
    /** An array with the radio options. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.oneOfType([
                PropTypes.string, PropTypes.node,
            ]).isRequired,
            value: PropTypes.string,
            disabled: PropTypes.bool,
        }),
    ),
    /** Specifies that an radio group must be filled out before submitting the form. */
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
};

RadioGroup.defaultProps = {
    label: null,
    name: null,
    className: undefined,
    style: undefined,
    value: undefined,
    onChange: () => {},
    required: false,
    options: [],
    error: null,
    id: undefined,
};

export default withReduxForm(RadioGroup);
