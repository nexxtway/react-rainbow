import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withReduxForm from './../../libs/hocs/withReduxForm';
import ButtonItems from './buttonItems';
import RenderIf from '../RenderIf';
import RequiredAsterisk from '../RequiredAsterisk';
import { uniqueId } from '../../libs/utils';
import Marker from './marker';
import StyledErrorText from './styled/errorText';
import isOptionChecked from './helpers/isOptionChecked';
import StyledContainer from './styled/container';
import StyledLabel from './styled/label';
import StyledButtonItemsContainer from './styled/buttonItemsContainer';

/**
 * A button list that can have a single entry checked at any one time.
 * @category Form
 */
class RadioButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.errorId = uniqueId('error-message');
        this.groupNameId = props.name || uniqueId('options');
        this.optionsRefs = this.generateRefsForOptions();

        this.state = {
            options: this.addRefsToOptions(props.options),
            markerLeft: 0,
            markerWidth: 0,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.updateMarker();
        }, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.options !== this.props.options) {
            this.updateRefs();
        }

        if (prevProps.value !== this.props.value) {
            this.updateMarker();
        }
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorId;
        }
        return undefined;
    }

    getCheckedOptionRef() {
        const { value, options } = this.props;
        const currentOptionIndex = options.findIndex(option => isOptionChecked(option, value));
        return currentOptionIndex !== -1 ? this.optionsRefs[currentOptionIndex] : null;
    }

    generateRefsForOptions() {
        const { options } = this.props;
        return options.map(() => React.createRef());
    }

    addRefsToOptions(options) {
        return options.map((option, index) => ({
            ...option,
            optionRef: this.optionsRefs[index],
        }));
    }

    isMarkerActive() {
        const { value, options } = this.props;
        return options.some(option => !option.disabled && option.value === value);
    }

    updateMarker() {
        const activeOptionRef = this.getCheckedOptionRef();
        if (activeOptionRef && activeOptionRef.current) {
            this.setState({
                markerLeft: activeOptionRef.current.offsetLeft,
                markerWidth: Math.max(
                    activeOptionRef.current.offsetWidth,
                    activeOptionRef.current.clientWidth,
                ),
            });
        }
    }

    updateRefs() {
        this.optionsRefs = this.generateRefsForOptions();
        this.setState({
            options: this.addRefsToOptions(this.props.options),
        });
        setTimeout(() => {
            this.updateMarker();
        }, 0);
    }

    render() {
        const {
            style,
            className,
            label,
            required,
            error,
            value,
            id,
            onChange,
            variant,
            size,
        } = this.props;
        const { options, markerLeft, markerWidth } = this.state;
        const markerStyle = {
            left: markerLeft,
            width: markerWidth,
        };

        return (
            <StyledContainer id={id} className={className} style={style}>
                <RenderIf isTrue={!!label}>
                    <StyledLabel variant={variant}>
                        <RequiredAsterisk required={required} />
                        {label}
                    </StyledLabel>
                </RenderIf>
                <StyledButtonItemsContainer variant={variant} size={size}>
                    <Marker
                        variant={variant}
                        isVisible={this.isMarkerActive()}
                        style={markerStyle}
                        size={size}
                    />

                    <ButtonItems
                        value={value}
                        onChange={onChange}
                        options={options}
                        name={this.groupNameId}
                        required={required}
                        ariaDescribedby={this.getErrorMessageId()}
                        variant={variant}
                        size={size}
                    />
                </StyledButtonItemsContainer>
                <RenderIf isTrue={!!error}>
                    <StyledErrorText id={this.getErrorMessageId()}>{error}</StyledErrorText>
                </RenderIf>
            </StyledContainer>
        );
    }
}

RadioButtonGroup.propTypes = {
    /** The radio group label */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The name of the radio group */
    name: PropTypes.string,
    /** The value of the element. */
    value: PropTypes.string,
    /** The variant changes the appearance of the radio button. Accepted variants include default,
     * brand and inverse. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'inverse', 'brand']),
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
    /**
     * The size of the RadioButton.
     * Options includes x-small, small, medium and large.
     * This value defaults to medium.
     */
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
    /** Specifies that an radio group must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
};

RadioButtonGroup.defaultProps = {
    label: null,
    name: null,
    className: undefined,
    style: undefined,
    value: undefined,
    variant: 'default',
    onChange: () => {},
    required: false,
    options: [],
    size: 'medium',
    error: null,
    id: undefined,
};

export default withReduxForm(RadioButtonGroup);
