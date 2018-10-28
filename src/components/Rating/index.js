import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RatingItems from './ratingItems';
import './styles.css';

export default class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
        this.handleOnHover = this.handleOnHover.bind(this);
        this.handleOnLeave = this.handleOnLeave.bind(this);
    }

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-rating_container', className);
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
        const {
            style,
            onChange,
            name,
        } = this.props;
        const { value } = this.state;
        return (
            <fieldset
                onMouseEnter={this.handleOnHover}
                onMouseLeave={this.handleOnLeave}
                name={name}
                className={this.getContainerClassNames()}
                style={style}>
                <RatingItems onChange={onChange} value={value} />
            </fieldset>
        );
    }
}

Rating.propTypes = {
    /** The numerical value of the rating stars. This value defaults to 0. */
    value: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    name: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

Rating.defaultProps = {
    value: '',
    onChange: () => {},
    name: undefined,
    className: undefined,
    style: undefined,
};
