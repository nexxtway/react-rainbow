import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from './../../libs/hocs/withReduxForm';
import RadioItems from './radioItems';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import { uniqueId } from '../../libs/utils';
import StyledFieldset from './styled/fieldset';
import StyledLegend from './styled/legend';
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
            required,
            error,
            onChange,
            options,
            value,
            id,
            variant,
        } = this.props;

        return (
            <StyledFieldset id={id} className={className} style={style} variant={variant}>
                <RenderIf isTrue={!!label}>
                    <StyledLegend variant={variant}>
                        <RequiredAsterisk required={required} />
                        {label}
                    </StyledLegend>
                </RenderIf>
                <StyledContentContainer>
                    <RadioItems
                        value={value}
                        onChange={onChange}
                        options={options}
                        name={this.groupNameId}
                        ariaDescribedby={this.getErrorMessageId()}
                        error={error}
                        variant={variant}
                    />
                </StyledContentContainer>
                <RenderIf isTrue={!!error}>
                    <StyledTextError id={this.getErrorMessageId()}>{error}</StyledTextError>
                </RenderIf>
            </StyledFieldset>
        );
    }
}

RadioGroup.propTypes = {
    /** The radio group label */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
    /** The variant changes the appearance of the radio group.
     * Accepted variants include base, neutral, brand, outline-brand, destructive,
     * success, inverse and border-inverse. */
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'inverse',
        'border-inverse',
    ]),
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
    variant: 'neutral',
};

export default withReduxForm(RadioGroup);
