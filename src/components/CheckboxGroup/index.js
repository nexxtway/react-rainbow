import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import CheckboxList from './checkboxList';
import StyledFieldset from './styled/fieldset';
import StyledLabel from './styled/label';
import StyledContentContainer from './styled/contentContainer';
import StyledTextError from '../Input/styled/errorText';

/**
 * A checkable input that communicates if an option is true, false or indeterminate.
 * @category Form
 */
class CheckboxGroup extends Component {
    constructor(props) {
        super(props);
        this.errorMessageId = uniqueId('error-message');
        this.groupNameId = props.name || uniqueId('options');
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    getValue() {
        const { value } = this.props;
        if (typeof value === 'string') {
            return [];
        }
        return value;
    }

    handleOnChange(event) {
        const { value, checked } = event.target;
        const { value: values, onChange } = this.props;
        if (checked && Array.isArray(values)) {
            return onChange(values.concat([value]));
        }
        if (checked && !Array.isArray(values)) {
            return onChange([value]);
        }
        return onChange(values.filter(valueId => valueId !== value));
    }

    render() {
        const {
            id,
            options,
            required,
            label,
            labelAlignment,
            hideLabel,
            error,
            style,
            className,
            orientation,
        } = this.props;
        return (
            <StyledFieldset id={id} className={className} style={style}>
                <RenderIf isTrue={label}>
                    <StyledLabel
                        hideLabel={hideLabel}
                        labelAlignment={labelAlignment}
                        required={required}
                        as="legend"
                    >
                        {label}
                    </StyledLabel>
                </RenderIf>
                <StyledContentContainer orientation={orientation}>
                    <CheckboxList
                        values={this.getValue()}
                        options={options}
                        onChange={this.handleOnChange}
                        name={this.groupNameId}
                        describedBy={this.getErrorMessageId()}
                        error={error}
                    />
                </StyledContentContainer>
                <RenderIf isTrue={error}>
                    <StyledTextError id={this.getErrorMessageId()}>{error}</StyledTextError>
                </RenderIf>
            </StyledFieldset>
        );
    }
}

CheckboxGroup.propTypes = {
    /** An Array of checkbox options with label, value and disabled for each checkbox. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
            value: PropTypes.string,
            disabled: PropTypes.bool,
        }),
    ),
    /** Text label for the checkbox group. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the CheckboxGroup label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the CheckboxGroup label. */
    hideLabel: PropTypes.bool,
    /** The name of the checkbox group */
    name: PropTypes.string,
    /** The list of selected checkboxes. Each array entry contains the value of a selected checkbox.
     * The value of each checkbox is set in the options attribute. */
    value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
    /** Set to true if at least one checkbox must be selected. This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The orientation of the element. */
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

CheckboxGroup.defaultProps = {
    options: [],
    value: [],
    label: null,
    labelAlignment: 'center',
    hideLabel: false,
    name: undefined,
    onChange: () => {},
    required: false,
    error: null,
    className: undefined,
    style: undefined,
    id: undefined,
    orientation: 'vertical',
};

export default withReduxForm(CheckboxGroup);
