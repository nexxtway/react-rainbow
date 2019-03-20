import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
export default class DatePicker extends Component {
    render() {
        return <h1>{this.props.value.toString()}</h1>;
    }
}

DatePicker.propTypes = {
    value: PropTypes.instanceOf(Date),
};

DatePicker.defaultProps = {
    value: undefined,
};
