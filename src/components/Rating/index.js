import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RatingItems from './ratingItems';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import StyledFieldset from './styled/fieldset';
import StyledLabel from './styled/label';

/** @category Form */
export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
        this.starGroupNameId = uniqueId('starGroup');
        this.handleOnHover = this.handleOnHover.bind(this);
        this.handleOnLeave = this.handleOnLeave.bind(this);
    }

    getName() {
        const { name } = this.props;
        if (name) {
            return name;
        }
        return this.starGroupNameId;
    }

    handleOnHover(event) {
        const { readOnly } = this.props;
        if (event.target.value && !readOnly) {
            return this.setState({ value: event.target.value });
        }
        return null;
    }

    handleOnLeave() {
        const { value } = this.props;
        return this.setState({ value });
    }

    render() {
        const {
            style,
            className,
            onChange,
            label,
            labelAlignment,
            hideLabel,
            readOnly,
            required,
        } = this.props;
        const { value } = this.state;
        return (
            <StyledFieldset
                onMouseOver={this.handleOnHover}
                onMouseLeave={this.handleOnLeave}
                className={className}
                style={style}
            >
                <RenderIf isTrue={label}>
                    <StyledLabel
                        label={label}
                        labelAlignment={labelAlignment}
                        hideLabel={hideLabel}
                        forwardedAs="legend"
                        required={required}
                    />
                </RenderIf>
                <RatingItems
                    onChange={onChange}
                    value={value}
                    name={this.getName()}
                    readOnly={readOnly}
                    required={required}
                />
            </StyledFieldset>
        );
    }
}

Rating.propTypes = {
    /** The value of the rating stars. This value defaults to 0. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** An identifier for the group of radio items. */
    name: PropTypes.string,
    /** The rating label */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the Rating label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the Rating label. */
    hideLabel: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** Specifies that the Rating is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
};

Rating.defaultProps = {
    value: 0,
    onChange: () => {},
    name: undefined,
    label: null,
    labelAlignment: 'center',
    hideLabel: false,
    className: undefined,
    style: undefined,
    readOnly: false,
    required: false,
};
