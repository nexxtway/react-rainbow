import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RatingItems from './ratingItems';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
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
        if (event.target.value) {
            return this.setState({ value: event.target.value });
        }
        return null;
    }

    handleOnLeave() {
        return this.setState({ value: this.props.value });
    }

    render() {
        const { style, className, onChange, label } = this.props;
        const { value } = this.state;
        return (
            <StyledContainer
                onMouseOver={this.handleOnHover}
                onMouseLeave={this.handleOnLeave}
                className={className}
                style={style}
            >
                <RenderIf isTrue={!!label}>
                    <StyledLabel>{label}</StyledLabel>
                </RenderIf>
                <RatingItems onChange={onChange} value={value} name={this.getName()} />
            </StyledContainer>
        );
    }
}

Rating.propTypes = {
    /** The value of the rating stars. This value defaults to 0. */
    value: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** An identifier for the group of radio items. */
    name: PropTypes.string,
    /** The rating label */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

Rating.defaultProps = {
    value: undefined,
    onChange: () => {},
    name: undefined,
    label: null,
    className: undefined,
    style: undefined,
};
