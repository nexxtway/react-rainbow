import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from '../../libs/hocs/withReduxForm';
import RadioItmes from './radioItems';
import RenderIf from '../RenderIf';
import { uniqueId } from '../../libs/utils';
import StyledFieldset from './styled/fieldset';
import StyledLabel from './styled/label';
import StyledTextError from '../Input/styled/errorText';
import StyledContentContainer from './styled/contentContainer';

/**
 * A select list that can have a single entry checked at any one time.
 * @category Form
 */
class RadioGroup extends Component {
    constructor(props) {
        super(props);
        this.errorId = uniqueId('error-message');
        this.groupNameId = props.name || uniqueId('options');
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
            className,
            label,
            labelAlignment,
            hideLabel,
            required,
            error,
            onChange,
            options,
            value,
            id,
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
                    <RadioItmes
                        value={value}
                        onChange={onChange}
                        options={options}
                        name={this.groupNameId}
                        ariaDescribedby={this.getErrorMessageId()}
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

RadioGroup.propTypes = {
    /** The radio group label */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the RadioGroup label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the RadioGroup label. */
    hideLabel: PropTypes.bool,
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
            label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
            value: PropTypes.string,
            disabled: PropTypes.bool,
        }),
    ),
    /** Specifies that an radio group must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The orientation of the element. */
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

RadioGroup.defaultProps = {
    label: null,
    labelAlignment: 'left',
    hideLabel: false,
    name: null,
    className: undefined,
    style: undefined,
    value: undefined,
    onChange: () => {},
    required: false,
    options: [],
    error: null,
    id: undefined,
    orientation: 'vertical',
};

export default withReduxForm(RadioGroup);
