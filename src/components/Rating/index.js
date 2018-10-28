import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RatingItems from './ratingItems';
import './styles.css';

export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
        this.onHover = this.onHover.bind(this);
        this.onLeave = this.onLeave.bind(this);
    }

    onHover(event) {
        if (event.target.value) {
            return this.setState({ value: event.target.value });
        }
        return null;
    }

    onLeave() {
        return this.setState({ value: this.props.value });
    }

    render() {
        const {
            className,
            style,
            onChange,
        } = this.props;
        const { value } = this.state;
        return (
            <div
                onMouseEnter={this.onHover}
                onMouseLeave={this.onLeave}
                className={className}
                style={style}>
                <RatingItems onChange={onChange} value={value} />
            </div>
        );
    }
}

Rating.propTypes = {
    /** The numerical value of the rating stars. This value defaults to 0. */
    value: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

Rating.defaultProps = {
    value: '',
    onChange: () => {},
    className: undefined,
    style: undefined,
};
